'use strict';

//middleware que valida si el token ha expirado

const services = require('../services/index');

function isAuth(req, res, next) {
    //valida que la solicitud lleve autorizacion en la cabecera del metodo http GET
    if (!req.headers.authorization) {
        return res.status(403).send({message: 'No tienes autorización!'});
    }

    //separa el token del bearer
    const token = req.headers.authorization.split(" ")[1];
    
    //manejo de promesa
    services.decodeToken(token)
        .then(response => {
            req.user = response
            next()
        })
        .catch(response => {
            res.status = response.status
        })
}

module.exports = isAuth;