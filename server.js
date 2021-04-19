const http = require('http');
const url = require('url');
const express = require('express')

function start(route) {
  function onRequest(request, response) {
    const pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(pathname);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
  console.log( __filename );
}

exports.start = start;