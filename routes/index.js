const express = require('express');
const app = express();

app.use(require('./mascota'));
app.use(require('./barrio'));
app.use(require('./raza'));

module.exports = app;