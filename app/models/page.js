'use strict';

const Sequelize = require('sequelize');
const db = require('../../index.js');

const Page = db.define('page', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
    },
    menuName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
    },
    depends: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
    },
    pageOrder: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
    }
})

module.exports = Page;