// Native modules
const http   = require('http');
const assert = require('assert');

// API Routes
const routes = require('./routes');

// Express
const express = require('express');
const cors    = require('cors');
const app     = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

var server;

// init initializes a server with all its middlewares/routes
module.exports.init = function(){
    return new Promise((resolve, reject) => {

        if (server){
            console.warn("Trying to init server again.");
            reject('Server already initialized');
        }
        server = {};

        server.app = app;

        // Setup routes
        routes.setup(server.app);

        resolve();

    });
}

// get returns the active server instance
module.exports.get = function() {
    assert.ok(server, "Server not initialized, please call init().");
    return server;
}

// run creates the server connection listening
module.exports.run = function(port) {
    assert.ok(server, "Server not initialized, please call init().");
    server.conn = http.createServer(server.app);
    return new Promise((resolve, reject) => {
        server.conn.on('listening', () => {
            resolve();
        })
        server.conn.on('error', err => {
            reject(err);
        })
        server.conn.listen(port);
    })
}
