"use strict";

console.log('hello World');

let http = require('http');

let host = '127.0.0.1'
let port = 3000

let server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    console.log("server Working");
    response.end('Server working - success');
});

server.listen(port,host, (error) => {
    if (error) {
        return console.log('Error occurred :', error);
    }

    console.log('server is listening on' + host + ":" + port);
});