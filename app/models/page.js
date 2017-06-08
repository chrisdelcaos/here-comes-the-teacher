'use strict';

const db = require('../../db');

const Page = db.sequelize.define('page', {
    name: {
        type: db.Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
    },
    status: {
        type: db.Sequelize.BOOLEAN,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
    }
});

module.exports = Page;