'use strict';

const express = require('express');
const router = express.Router();


const {
    createFood,
    getAllFood,
    getFood,
    updateFood,
    deleteFood,
} = require('../business/foodRoutes-implementations');

router.post('/food', createFood);
router.get('/food', getAllFood);
router.get('/food/:id', getFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

module.exports = router;