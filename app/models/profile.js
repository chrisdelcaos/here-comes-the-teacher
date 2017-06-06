'use strict';

const Sequelize = require('sequelize');
const db = require('../../index.js');

const Profile = db.define('profile', {
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
})

module.exports = Profile;