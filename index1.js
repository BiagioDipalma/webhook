'use strict';

const express = require('express');
const bodyParser = require('body-parser');
var request = require('request');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post("/mainService", function(req, res){
    res.json({
        speech: "hi from webhook",
        displayText =" hi from webhook",
        source:'webhook'
    })


})

app.post('/', function(req, res) {
    res.json({
        speech: "hi from webhook",
        displayText =" hi from webhook",
        source:'webhook'
    })
});



app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
