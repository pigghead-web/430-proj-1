// Required modules
const http = require('http');
const url = require('url');
const query = require('querystring')

// Developer-made modules
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

// Port
const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
    GET: {
        '/': htmlHandler.getIndex,
        'badRequest': jsonHandler.badRequest,
        '/addUser': jsonHandler.addUser,
        '/getUsers': jsonHandler.getUsers,
        '/bundle.js': htmlHandler.getBundle,
        '/style.css': htmlHandler.getCss,
        notFound: jsonHandler.notFound
    },
    HEAD: {
        '/getUsers': jsonHandler.getUsersMeta,
        notFound: jsonHandler.notFound,
    }
}

// handle GET -- handle >>AUTOMATICALLY<<

// handle POST
const handlePost = (request, response, parsedUrl) => {
    
    if (parsedUrl === '/addUser') {
        const res = response;
        const body = [];
        
        request.on('err', (err) => {
            console.dir(err);
            res.statusCode = 400;
            res.end();
        });
        
        request.on('data', (chunk) => {
           body.push(chunk); 
        });
        
        request.on('end', () => {
            const bodyString = Buffer.concat(body).toString();
            const bodyParams = query.parse(bodyString);
            jsonHandler.addUser(request, response, body);
        });
    }
}

// Handle requests
const onRequest = (request, response) => {
    const parsedUrl = url.parse(request.url);
    const params = query.parse(parsedUrl.query);

    console.dir("method: " + request.method);
    console.dir("Path name: " + parsedUrl.pathname);
    console.dir(urlStruct[request.method]);

    
    /*if(request.method === 'POST') {
        console.dir('Post');
    } else {
        console.dir('Getting Index');
        htmlHandler.getIndex(request, response);
    }*/
    
    if(urlStruct[request.method][parsedUrl.pathname]) {
        urlStruct[request.method][parsedUrl.pathname](request, response, params);
    } else {
        urlStruct[request.method].notFound(request, response, params);
    }
}

http.createServer(onRequest).listen(port);

console.dir(`Listening on 127.0.0.1: ${port}`);
