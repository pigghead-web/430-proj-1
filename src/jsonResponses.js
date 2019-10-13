// a list of all connected users
const users = {};

const respondJSON = (request, response, status, object) => {
    response.writeHead(status, {'Content-Type': 'application/json'});
    response.write(JSON.stringify(object));
    response.end();
}

const respondJSONMeta = (request, response, object) => {
    response.write(JSON.stringify(object))
    response.end();
}

const addUser = (request, response, body) =>  {
    const responseJSON = {
        message: "Please include a username",  // this will be a message for debugging
        userMessage: " ",  // this is the actual message that will be sent by the user
    };
    
    console.dir('ADDING USER...');
    
    if(!body.username) {
        responseJSON.id = "missingElements"
        return respondJSON(request, response, 400, responseJSON);
    }
    
    let statusCode = 200;
    
    if(users[body.username]) {
        statusCode = 204;  // update statusCode
    } else {
        users[body.username] = {};
    }
    
    respondJSON(request, response, statusCode, responseJSON);
}

const getUsers = (request, response) => {
    respondJSON(request, response, 200, users);
}

const getUsersMeta = (request, response) => {
    respondJSONMeta(request, response, users);
}

const notFound = (request, response) => {
    const responseJSON = {
        message: "Page not found",
    };
    
    respondJSON(request, response, 404, responseJSON);
}

const notFoundMeta = (request, response) => {
    const responseJSON = {
        message: "Page not found",
    };
    
    respondJSONMeta(request, response, responseJSON);
}

module.exports = {
    addUser,
    getUsers,
    getUsersMeta,
    notFound,
    notFoundMeta,
}