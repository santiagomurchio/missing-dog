const express = require('express');
const RazaModel = require('../models/raza');
const app = express();
// const {sequelize, Sequelize} = require('../models/db');
const Raza = require('../models/raza');

app.get('/raza', (req, res) => {

    Raza
        .findAll({})
        .then(razas => res.json({
            ok: true,
            count: razas.length,
            razas
        }));

});

app.get('/raza/:id', (req, res) => {

    let id = req.params.id;

    Raza
        .findAll({
            where:{
                id
            }
        })
        .then(result => {
            if(result && result.length === 1) {
                return res.json({
                    ok: true,
                    raza: result[0]
                });
            } else {
                return res.status(404).json({
                    ok: false,
                    message: 'La raza buscada no existe.'
                })
            }
    });

});

app.post('/raza', (req, res) => {
    let body = req.body;

    let raza = Raza.build({
        nombre: body.nombre,
        descripcion: body.descripcion
    });

    raza
        .save()
        .then(razaDB => {
            res.json({
                ok: true,
                razaDB
            });
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error
            });
        })

});

app.put('/raza/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;

    Raza
        .findAll({
            where:{
                id
            }
        })
        .then(result => {
            // return res.json({result});
            if(result && result.length === 1) {
                let raza = result[0];
                raza
                    .update({
                        nombre: body.nombre,
                        descripcion: body.descripcion
                    })
                    .then(razaDB => {
                        return res.json({
                            ok: true,
                            razaDB
                        });
                    })
                    .catch(error => {
                        return res.status(500).json({
                            ok: false,
                            error
                        })
                    })

            } else {
                return res.status(404).json({
                    ok: false,
                    message: 'La raza buscada no existe.'
                })
            }
    });
});

module.exports = app;