const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('./db');
const Raza = require('./raza');


const Mascota = sequelize.define('Mascota', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, default: 0},
    nombre: {type: Sequelize.STRING, allowNull: false},
    encontrado: {type: Sequelize.BOOLEAN, allowNull: false, default: false},
    foto: {type: Sequelize.STRING, allowNull: true}
});

Mascota.belongsTo(Raza);

module.exports = Mascota;