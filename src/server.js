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
    '/': htmlHandler.getIndex,
    'badRequest': jsonHandler.badRequest,
    '/bundle.js': htmlHandler.getBundle,
    notFound: jsonHandler.notFound
}

// handle GET -- handle >>AUTOMATICALLY<<

// handle POST

// Handle requests
const onRequest = (request, response) => {
    const parsedUrl = url.parse(request.url);
    const params = query.parse(parsedUrl.query);
    
    /*if(request.method === 'POST') {
        console.dir('Post');
    } else {
        console.dir('Getting Index');
        htmlHandler.getIndex(request, response);
    }*/
    
    if(urlStruct[parsedUrl.pathname]) {
        urlStruct[parsedUrl.pathname](request, response, params);
    } else {
        console.dir('calling not found on: ' + urlStruct[parsedUrl.pathname]);
        urlStruct.notFound(request, response, params);
    }
}

http.createServer(onRequest).listen(port);

console.dir(`Listening on 127.0.0.1: ${port}`);
