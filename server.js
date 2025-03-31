'use strict';

//imports the Express module
const express = require('express');

//sets variables for host and port
const PORT = 8080;
const HOST = '0.0.0.0';

//creates an instance of the Express application
const app = express();

//define a route for the root url that responds with a message
app.get('/', (req, res) => {
    res.send('Hello World.  This is week 2 practical repurposed for week 5!'); //sets the message
});

//start the server and listen on the port and host specified
app.listen(PORT, HOST, () => {
    console.log('Running on http://' + HOST + ':' + PORT); //logs to console that the server is running and on what host and port
});