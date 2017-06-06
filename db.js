const Sequelize = require('sequelize');
const db = new Sequelize('profe','root','root', {
  logging: false
});
//exportando la conexion para los modelos
module.exports = db;