'use strict';

const Sequelize = require('sequelize');
const User = require('../models/user');
const service = require('../services/index');

//funcion de registro
function signUp (req, res) {
    //instancia de nuevo usuario, asume desde modelo USER
    const user = User.build({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        profileId: req.body.profileId
    });

    user.save()
    .then(function(data){
        return res.status(200).send({token: service.createToken(user)});
    })
    .catch(function(error){
        console.log(error);
        res.status(500).send({message: `error al registrar el usuario: ${error}`})
    })
}

//login
function signIn (req, res) {
    User.findOne({ where: {email: req.body.email} })
        .then(user => {
            if (!user) return res.status(404).send({message: 'No existe el usuario'});//not found
            req.user = user;
            res.status(200).send({
                mesagge: 'Te has logueado correctamente',
                token: service.createToken(user)
            })
        })
        .catch(err => {
            if (err) return res.status(500).send({mesagge: err})//internal server error
        })
}

module.exports = {
    signUp,
    signIn
}