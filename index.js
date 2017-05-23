'use strict';

const mongoose = require('mongoose');
const app = require ('./app.js');
const config = require('./config.js');

mongoose.connect(config.db, (err, res) => {
    if(err){
        return console.log('Conexion a la BD no se pudo realizar...');
    }
    console.log('Conexion a la BD establecida...');

    app.listen(config.port, () => {
        console.log(`API REST Corriendo en http://localhost:${config.port}`);
    });
});