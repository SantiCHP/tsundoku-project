// controlador-comics.js

const {
    validationResult
} = require('express-validator');
const mongoose = require('mongoose');
const Comic = require('../models/comic');


const recuperaComics = async(req, res, next) => {
    let comics;
    try {
        comics = await Comic.find();
    } catch (err) {
        const error = new Error(
            'Ha habido algún error. No se han podido recuperar los datos'
        );
        error.code = 500;
        return next(error);
    }
    if (!comics) {
        const error = new Error(
            'No se ha podido encontrar un comic con el id proporcionado'
        );
        error.code = 404;
        return next(error);
    }
    res.json({
        comics: comics,
    });
};

const altaComic = async(req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        const error = new Error('Error de validación. Compruebe sus datos');
        error.code = 422;
        throw error;
    }
    const {
        titulo,
        caratula,
        autor,
        coleccion,
        editorial,
        serie,
        descripcion
    } = req.body;
    let existeComic;
    try {
        existeComic = await Comic.findOne({
            titulo: titulo
        });
    } catch (err) {
        const error = new Error(err);
        error.code = 500;
        return next(error);
    }

    if (existeComic) {
        const error = new Error('Ya existe un comic con ese titulo.');
        error.code = 401;
        return next(error);
    }
    const nuevoComic = new Comic({
        titulo: titulo,
        caratula: caratula,
        autor: autor,
        coleccion: coleccion,
        editorial: editorial,
        serie: serie,
        descripcion: descripcion
    })
    try {
        await nuevoComic.save();
    } catch (error) {
        const err = new Error('No se han podido guardar los datos');
        err.code = 500;
        return next(err);
    }
    res.json({
        comics: nuevoComic,
    });
}
exports.recuperaComics = recuperaComics;
exports.altaComic = altaComic;