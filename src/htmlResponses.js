// Import the filesystem module
const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../hosted/client.html`);
const bundle = fs.readFileSync(`${__dirname}/../hosted/bundle.js`);
const css = fs.readFileSync(`${__dirname}/../hosted/style.css`);

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

const getCss = (request, response) => {
    response.writeHead(200, {'Content-Type':'text/css'});
    response.write(css)
    response.end();
}

module.exports = {
    getIndex,
    getBundle,
    getCss,
}