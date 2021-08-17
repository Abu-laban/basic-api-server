'use strict';

const express = require('express');
const router = express.Router();


const {
    createClothes,
    getAllClothes,
    getClothes,
    updateClothes,
    deleteClothes,
} = require('../business/clothesRoutes-implementations');

router.post('/clothes', createClothes);
router.get('/clothes', getAllClothes);
router.get('/clothes/:id', getClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);

module.exports = router;