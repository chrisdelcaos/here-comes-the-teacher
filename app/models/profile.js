'use strict';

const Sequelize = require('sequelize');
const db = require('../../db');

const Profile = db.sequelize.define('profile', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
    }
});

module.exports = Profile;