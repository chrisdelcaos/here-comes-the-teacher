'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    email: {type: String, unique: true, lowercase: true},
    displayName: String,
    avatar: String,
    /* select: false => no se selecciona este atributo
     cuando se realiza un select a la clase */
    password: {type: String, select: false},
    singUpDate: {type: Date, default: Date.now()},
    lastLogin: Date
});

//encripta contraseña antes de guardar 
// method = pre
UserSchema.pre('save', function (next) {
    let user = this
    
    if(!user.isModified('password')) {
        return next()
    } 

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return err;

        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) return err;
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.gravatar = function () {
    if(!this.email) return 'https://gravatar.com/avatar/?s=200&d=retro'

    const md5 = crypto.createHash('md5').update(this.email).digest('hex');
    return `https://gravatar.com/avatar/${md5}?s=200&d=retro`;
}

module.exports = mongoose.model('user', UserSchema);