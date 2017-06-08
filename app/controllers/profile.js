'user strict';

const Sequelize = require('sequelize');
const Profile = require('../models/profile');

function createProfile (req, res) {
    //instancia de nuevo usuario, asume desde modelo USER
    const profile = Profile.build({
        name: req.body.name,
        status: true
    });

    profile.save()
    .then(function(data){
        return res.status(200).send({message: 'perfil grabado correctamente'});
    })
    .catch(function(error){
        console.log(error);
        res.status(500).send({message: `error al registrar el perfil: ${error}`})
    })
}

module.exports = {
    createProfile
}