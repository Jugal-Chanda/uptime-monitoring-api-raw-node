/*
 * Title: Uptime monitoring system
 */

// Dependencies
const http = require('http');
const url = require('url');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000,
};

// create a server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Server is running on port ${app.config.port}`);
    });
};

// Handle request response
app.handleReqRes = (req, res) => {
    // request handling
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);

    // get the path
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // get the http method
    const method = req.method.toLowerCase();

    // get the query string as an object
    const queryStringObject = parsedUrl.query;

    // get the headers as an object
    const headersObject = req.headers;

    // handle request response
    res.end('Hello World2!');
};

// start the server
app.createServer();
