const Sequelize = require('sequelize');
const sequelize = new Sequelize('profe','root','root', {
  logging: false
});

var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
//export
module.exports = db;
//mapping
const Profile = require('./app/models/profile');
const User = require('./app/models/user');
const Page = require('./app/models/page');
const pageProfile = require('./app/models/pageProfile');

