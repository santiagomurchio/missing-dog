const express = require('express');
const Mascota = require('../models/mascota');
const Raza = require('../models/raza');
const app = express();

app.get('/mascota', (req, res) => {

    Mascota.findAll({}).then(result => {
        return res.json({
            ok: true,
            result
        });
    })
});

app.post('/mascota', (req, res) => {
    let body = req.body;

    Raza.findAll({
        where: {
            id: body.raza
        }
    }).then(result => {
        if(result && result.length === 1) {
            let raza = result[0];
            console.log(raza);

            let mascota = Mascota.build({
                nombre: body.nombre,
                encontrado: false
            });
        
            mascota
                .save()
                .then(mascotaDB => {
                    mascotaDB.setRaza(raza);
                    return res.json({
                        ok: true,
                        mascotaDB
                    });
                })
                .catch(error => {
                    return res.status(400).json({
                        ok: false,
                        error
                    });
                });
                    
        } else {
            return res.status(404).json({
                ok: false,
                message: 'La raza buscada no existe.'
            })
        }
    })
});

app.put('/mascota/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;

    let raza;
    if(body.raza) {
        Raza.findAll({
            where: {
                id: body.raza
            }
        }).then(result => {
            if(result && result.length === 1) {
                raza = result[0];
            } else {
                return res.status(404).json({
                    ok: false,
                    message: 'La raza buscada no existe.'
                })
            }
        })
    }

    Mascota
        .findAll({
            where:{
                id
            }
        })
        .then(result => {
            
            if(result && result.length === 1) {
                let mascota = result[0];
                mascota
                    .update({
                        nombre: body.nombre,
                        encontrado: body.encontrado
                    })
                    .then(mascotaDB => {
                        if(raza && mascotaDB.RazaId !== raza.id) {
                            mascotaDB.setRaza(raza);
                        }
                        return res.json({
                            ok: true,
                            mascotaDB
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
                    message: 'La macota buscada no existe.'
                })
            }
    });


});

module.exports = app;