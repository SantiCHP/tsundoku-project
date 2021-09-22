// rutas-usuarios.js
const express = require('express');
const {
  check
} = require('express-validator');


const controladorColecciones = require('../controllers/controlador-colecciones');

const router = express.Router();

router.get('/', controladorColecciones.recuperaColecciones);

router.post('/nueva',
  [
    check('nombre').not().isEmpty(),
  ],
  controladorColecciones.crearColeccion);

router.delete('/delete/:cid', controladorColecciones.eliminarColeccion);

module.exports = router;
