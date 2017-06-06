'use strict';

const Sequelize = require('sequelize');
const db = new Sequelize('profe','root','root');
//exportando la conexion para los modelos
module.exports = db;

const app = require ('./app.js');
const config = require('./config.js');

app.listen(config.port, () => {
    console.log(`API REST Corriendo en http://localhost:${config.port}`);
    db.sync({force: true})
    .then(message => {
      console.log('Conexion a BD establecida');
    })
    .catch(function(err) {
      throw err;
    });
});