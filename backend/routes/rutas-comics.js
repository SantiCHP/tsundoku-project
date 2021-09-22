// rutas-comics.js
const express = require('express');
const {
    check
  } = require('express-validator');

const controladorComics = require('../controllers/controlador-comics');

const router = express.Router();

router.get('/', controladorComics.recuperaComics);

router.post('/alta',  
    [
    check('titulo').not().isEmpty(),
    check('caratula').not().isEmpty(),
    check('autor').not().isEmpty(),
    check('coleccion').not().isEmpty(),
    check('editorial').not().isEmpty(),
    check('serie').not().isEmpty(),
    check('descripcion').not().isEmpty()
  ], controladorComics.altaComic);

module.exports = router;