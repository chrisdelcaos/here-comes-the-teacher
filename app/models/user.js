'use strict';

const Sequelize = require('sequelize');
const db = require('../../index.js');
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
    // `this` refers to the class, but the instance(s) is the first argument many hook functions
    // this is a contrived example! Hooks are useful in more complicated dbs, but in this case,
    // if a puppy's favorite food is pizza, we override the user input with a particularly delicious variety
        beforeCreate: function(User, options) {
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
})

module.exports = User;