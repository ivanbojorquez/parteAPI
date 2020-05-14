const express = require('express');

const router = express.Router();

const userController = require('../models/users-controller');

//todos los usuarios
router.get('/:uid' , userController.getUsers);

router.post('/signup' , userController.signup);

router.post('/login', userController.login);


module.exports = router;