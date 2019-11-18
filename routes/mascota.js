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

    let mascota = Mascota.build({
        nombre: body.nombre,
        encontrado: false,
        RazaId: body.raza
    });

    mascota
        .save()
        .then(mascotaDB => {
            res.json({
                ok: true,
                mascotaDB
            });
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error
            });
        });

    // Raza.findAll({
    //     where: {
    //         id: body.raza
    //     }
    // }).then(result => {
    //     if(result && result.length === 1) {
    //         let raza = result[0];
    //         console.log(raza);

    //         let mascota = Mascota.build({
    //             nombre: body.nombre,
    //             encontrado: false
    //         });
        
    //         mascota
    //             .save()
    //             .then(mascotaDB => {

    //                 mascotaDB.setRaza(raza);

    //                 res.json({
    //                     ok: true,
    //                     mascotaDB
    //                 });
                
    //             })
    //             .catch(error => {
    //                 res.status(400).json({
    //                     ok: false,
    //                     error
    //                 });
    //             });
        
                    
    //     } else {
    //         return res.status(404).json({
    //             ok: false,
    //             message: 'La raza buscada no existe.'
    //         })
    //     }

    // })

});
module.exports = app;