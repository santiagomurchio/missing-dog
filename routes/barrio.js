const express = require('express');
// const Barrio = require('../models/barrio');
const app = express();

app.get('/barrio', (req, res) => {

    // Categoria
    //     .find({})
    //     .sort('descripcion')
    //     .populate('usuario', 'nombre email')
    //     .exec((err, categorias) => {
    //         if (err) {
    //             res.status(400).json({
    //                 ok: false,
    //                 err
    //             });
    //         } else {

    //             Categoria.countDocuments({}, (err, count) => {
    //                 res.json({
    //                     ok: true,
    //                     count,
    //                     categorias
    //                 });
    //             });
    //         }

    //     });

});

module.exports = app;