const express = require('express');

const router = express.Router();

const placesController = require('../models/places-controller');

router.get('/:pid', placesController.getPlaceById);
router.get('/user/:uid', placesController.getPlaceByUser);
router.post('/', placesController.createPlace);

//ruta para editar un place
router.patch('/:pid', placesController.updatePlace );

router.delete('/:pid', placesController.deletePlace);

module.exports = router;