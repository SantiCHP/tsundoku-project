// server.js
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const cors = require('cors');
const rutasComics = require('./routes/rutas-comics');
const rutasColecciones = require('./routes/rutas-colecciones');
const rutasFavoritos = require('./routes/rutas-favoritos');
const rutasUsuarios = require('./routes/rutas-usuarios');
const { urlencoded } = require('express');

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
})

app.use('/api/tsundoku/comics', rutasComics);
app.use('/api/tsundoku/usuarios', rutasUsuarios);
app.use('/api/tsundoku/colecciones', rutasColecciones);
app.use('/api/tsundoku/favoritos', rutasFavoritos);


app.use((req, res, next) => {
    res.status(404);
    res.json({
        mensaje: 'Datos no encontrados'
    });

})


app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({
        mensaje: error.message || 'Ha ocurrido un error desconocido'
    });
});


mongoose.connect(process.env.MONGO_DB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => console.log('tsundoku 5000'))
    })
    .catch(error => console.log(error))