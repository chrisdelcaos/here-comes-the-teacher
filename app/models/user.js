'use strict';

const Sequelize = require('sequelize');
const db = require('../../db');
const Promise = require("bluebird");
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

const User = db.define('user', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
    },
}, {
    hooks: {
        beforeValidate: function(User, options) {
            const SALT_FACTOR = 5;
            if (!User.changed('password')) {
                return db.Promise.reject("not modified");
            }
            return bcrypt.genSaltAsync(SALT_FACTOR).then(function(salt) {
            return bcrypt.hashAsync(User.password, salt, null)
                }).then(function(hash) {
                    User.setDataValue('password', hash);
                });
        }
    }
});

module.exports = User;