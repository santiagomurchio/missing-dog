const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('./db');

const Raza = sequelize.define('Raza', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, default: 0},
    nombre: {type: Sequelize.STRING, allowNull: false},
    descripcion: {type: Sequelize.STRING(4096), allowNull: false},
    foto: {type: Sequelize.STRING, allowNull: true}
});    

module.exports = Raza;