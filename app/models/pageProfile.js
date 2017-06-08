'use strict';

const db = require('../../db');

const PageProfile = db.sequelize.define('pageProfile', {
    status: {
        type: db.Sequelize.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
});

module.exports = PageProfile;