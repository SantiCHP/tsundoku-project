// rutas-favoritos.js
const express = require('express');
const {
  check
} = require('express-validator');


const controladorFavoritos = require('../controllers/controlador-favoritos');

const router = express.Router();

router.get('/', controladorFavoritos.recuperaFavoritos);

router.post('/new',
  [
    check('nombre').not().isEmpty(),
  ],
  controladorFavoritos.crearFavorito);

router.delete('/delete/:fid', controladorFavoritos.eliminarFavorito);

module.exports = router;