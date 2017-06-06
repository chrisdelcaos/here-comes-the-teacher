'use strict';
const app = require ('./app.js');
const config = require('./config.js');
const db = require('./db');

app.listen(config.port, () => {
    console.log(`API REST Corriendo en http://localhost:${config.port}`);
    db.sync({
      force: true,
      logging: console.log
    })
    .then(message => {
      console.log('Conexion a BD establecida');
    })
    .catch(function(err) {
      throw err;
    });
});