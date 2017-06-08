'use strict';

const express = require('express');
const UserCtrl = require('../controllers/user');
const ProfileCtrl = require('../controllers/profile');
const auth = require('../middlewares/auth');
const api = express.Router();
/*
api.get('/product', ProductCtrl.getProducts);
api.get('/product/:productId', ProductCtrl.getProduct);
api.put('/product/:productId', ProductCtrl.updateProduct);
api.delete('/product/:productId', ProductCtrl.deleteProduct);
*/
api.post('/signup', UserCtrl.signUp);
api.post('/signin', UserCtrl.signIn);
api.post('/profile', ProfileCtrl.createProfile);

api.get('/private', auth, (req, res) => {
    res.status(200).send({message: 'Tienes acceso!'});
})

module.exports = api;