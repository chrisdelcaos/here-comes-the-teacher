'use strict';

const db = require('../../db');
const Profile = require('./profile');
const Promise = require("bluebird");
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

const User = db.sequelize.define('user', {
    email: {
        type: db.Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
    },
    firstName: {
        type: db.Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
    },
    lastName: {
        type: db.Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
    },
    password: {
        type: db.Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
    },
    profileId: {
        type: db.Sequelize.INTEGER,
        allowNull: false
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

User.belongsTo(Profile, {foreignKey: 'profileId', targetKey: 'id'});

module.exports = User;