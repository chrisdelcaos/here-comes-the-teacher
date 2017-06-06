/*'use strict';

const Sequelize = require('sequelize');
const db = require('../../index');

const Page = db.define('page', {
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

module.exports = Page;*/