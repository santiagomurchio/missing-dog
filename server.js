 
require('./config/config.js');
require('./models/db');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Configuracion global de rutas
app.use(require('./routes/index'));

// habilitar la carpeta public
// app.use(express.static(path.resolve(__dirname, '../public')));

// DB connection


app.listen(process.env.PORT, () => {
    console.log(`Escuchando el puerto ${process.env.PORT}...`);
});