'use strict';

const jwt = require('jwt-simple'); //json web token
const moment = require('moment'); //libreria para manejar fechas ;)
const config = require('../../config');

//crea un token
function createToken(user) {
    const payload = {
        sub: user._id,
        iat: moment().unix(), //tiempo en formato unix
        exp: moment().add(14, 'days').unix() 
    }
    return jwt.encode(payload, config.SECRET_TOKEN);
}
//codifica el token creado
function decodeToken(token) {
    const decoded = new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, config.SECRET_TOKEN);

            if (payload.exp <= moment.unix()) {
                reject({
                    status: 401,
                    message: 'El token ha expirado'
                });
            }
            //si todo sale bien, envia el token
            resolve(payload.sub);
        } catch (err) {
            reject({
                status: 500,
                message: 'Invalid Token'
            });
        }
    });
    return decoded;
}

module.exports = {
    createToken,
    decodeToken
}