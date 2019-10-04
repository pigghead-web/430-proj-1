// a list of all connected users
const users = {};

// Container for all objects that will be displayed on the screen
// aka >> user sends message, message gets stored here, updates to
// this object will cause them to get sent to the chat box
//const chatBox = {};

const respondJSON = (request, response, status, object) => {
    response.writeHead(status, {'Content-Type': 'application/json'});
    response.write(JSON.stringify(object));
    response.end();
}

const addUser = (request, response, body) =>  {
    const responseJSON = {
        message: "Please include a username",  // this will be a message for debugging
        userMessage: " ",  // this is the actual message that will be sent by the user
    };
    
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

const notFound = (request, response) => {
    const responseJSON = {
        message: "Page not found",
    };
    
    respondJSON(request, response, 404, responseJSON);
}

module.exports = {
    addUser,
    notFound
}