// Import the filesystem module
const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../hosted/client.html`);
const bundle = fs.readFileSync(`${__dirname}/../hosted/bundle.js`);

const getIndex = (request, response) => {
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write(index);
    response.end();
}

const getBundle = (request, response) => {
    response.writeHead(200, {'Content-Type':'application/json'});
    response.write(bundle);
    response.end();
}

module.exports = {
    getIndex,
    getBundle,
}