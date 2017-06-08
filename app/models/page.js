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
    urlName: {
        type: db.Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
    },
    icon: {
        type: db.Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
    },
    menuName: {
        type: db.Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
    },
    depends: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
    },
    pageOrder: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
    }
});

module.exports = Page;