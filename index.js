'use strict';

//const mongoose = require('mongoose');
const Sequelize = require('sequelize');
const app = require ('./app.js');
const config = require('./config.js');
//params: db_name, usename, password
const conection = new Sequelize('profe','root','root');

conection
  .authenticate()
  .then(function() {
    console.log('Connection has been established successfully.');
    app.listen(config.port, () => {
        console.log(`API REST Corriendo en http://localhost:${config.port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
//mongoose.connect(config.db, (err, res) => {
  //  if(err){
    //    return console.log('Conexion a la BD no se pudo realizar...');
    //}
    //console.log('Conexion a la BD establecida...');


//});