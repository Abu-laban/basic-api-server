const { Food } = require('../models');


async function createFood(req, res) {
    let foodInfo = req.body;
    let newFood = await Food.create(foodInfo);
    res.status(201).json(newFood);
}

async function getAllFood(req, res) {
    let allFood = await Food.findAll();
    res.status(200).json(allFood);
}

async function getFood(req, res) {
    const id = parseInt(req.params.id);
    let findFood = await Food.findOne({ where: { id: id } });
    res.status(200).json(findFood);
}

async function updateFood(req, res) {
    const id = parseInt(req.params.id);
    let foodInfo = req.body;
    let selectFood = await Food.findOne({ where: { id } });
    let updateFood = await selectFood.update(foodInfo);
    res.status(200).json(updateFood);
}

async function deleteFood(req, res) {
    const id = parseInt(req.params.id);
    let deleteFood = await Food.destroy({ where: { id } });
    res.status(204).json(deleteFood);
}

module.exports = {
    createFood,
    getAllFood,
    getFood,
    updateFood,
    deleteFood,
}
