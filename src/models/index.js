'use strict';

require("dotenv").config();
const POSTGRES_URI = process.env.DATABASE_URL;
const { Sequelize, DataTypes } = require('sequelize');

const food = require('./food');
const clothes = require('./clothes')

var sequelize = new Sequelize(POSTGRES_URI, {});

module.exports = {
    db: sequelize,
    Food: food(sequelize, DataTypes),
    Clothes: clothes(sequelize, DataTypes),
}