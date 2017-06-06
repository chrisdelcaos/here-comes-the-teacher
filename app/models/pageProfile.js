'use strict';

const Sequelize = require('sequelize');
const db = require('../../db');

const PageProfile = db.define('pageProfile', {
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
});

module.exports = PageProfile;