const { Clothes } = require('../models');


async function createClothes(req, res) {
    let clothesInfo = req.body;
    let newClothes = await Clothes.create(clothesInfo);
    res.status(201).json(newClothes);
}

async function getAllClothes(req, res) {
    let allClothes = await Clothes.findAll();
    res.status(200).json(allClothes);
}

async function getClothes(req, res) {
    const id = parseInt(req.params.id);
    let findClothes = await Clothes.findOne({ where: { id: id } });
    res.status(200).json(findClothes);
}

async function updateClothes(req, res) {
    const id = parseInt(req.params.id);
    let clothesInfo = req.body;
    let selectClothes = await Clothes.findOne({ where: { id } });
    let updateClothes = await selectClothes.update(clothesInfo);
    res.status(200).json(updateClothes);
}

async function deleteClothes(req, res) {
    const id = parseInt(req.params.id);
    let deleteClothes = await Clothes.destroy({ where: { id } });
    res.status(204).json(deleteClothes);
}

module.exports = {
    createClothes,
    getAllClothes,
    getClothes,
    updateClothes,
    deleteClothes,
}
