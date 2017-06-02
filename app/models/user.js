'use strict';

const Sequelize = require('sequelize');
const db = require('../../index.js');
const bcrypt = require('bcrypt-nodejs');

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
        beforeCreate: function(user, options) {
            /*
            return hashPassword(user.password).then(hashedPw => {
                user.password = hashedPw;
            });
            */
            bcrypt.genSalt(10, (err, salt) => {
            if (err) return err;

            bcrypt.hash(user.password, salt, null, (err, hash) => {
                if (err) return err;
                user.password = hash;
                next();
            });
        });
    }
  }
})

module.exports = User;