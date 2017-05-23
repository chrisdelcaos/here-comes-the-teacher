'use strict';

//declaracion de variables que importan modulos
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./app/routes/index');
const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))
app.use('/api', api);
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'))
})

module.exports = app;