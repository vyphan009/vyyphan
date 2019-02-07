


const express = require('express');
const app = express();
var fetch = require('node-fetch');
const port = process.env.PORT || 3000;
const path = require('path');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    
});

app.get("/", function(req,resp){
    var time = new Date();
    
    resp.end("The current time :" + time.toLocaleTimeString('en-US', {timezone:America/Vancouver}));
     
});

app.listen(port, function(err){
    if(err){
        return false;
    }
    
    console.log("Port is open at " + port);
});

