// controlador-favoritos.js

const { validationResult } = require('express-validator');
const mongooseUniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const Favorito = require('../models/favorito');
const Usuario = require('../models/usuario');

const recuperaFavoritos = async (req, res, next) => {
	favoritos = await Favorito.find();
	console.log(favoritos);
	try {
		favoritos = await Favorito.find();
	} catch (err) {
		const error = new Error(
			'Ha habido algún error. No se han podido recuperar los datos'
		);
		error.code = 500;
		return next(error);
	}
	if (!favoritos) {
		const error = new Error(
			'No se ha podido encontrar un comic favorito con el id proporcionado'
		);
		error.code = 404;
		return next(error);
	}
	res.json({
		favoritos: favoritos,
	});
};

const crearFavorito = async (req, res, next) => {
	const errores = validationResult(req); 
	if (!errores.isEmpty()) {
		const error = new Error('Error de validación. Compruebe sus datos');
		error.code = 422;
		return next(error);
	}
	const {  } = req.body;
	const nuevoFavorito = new Favorito({
		
	});

	let usuario; 
	try {
		usuario = await Usuario.findById(creador);
	} catch (error) {
		const err = new Error('Ha fallado la creación del comic favorito');
		err.code = 500;
		return next(err);
	}

	if (!usuario) {
		const error = new Error(
			'No se ha podido encontrar un usuario con el id proporcionado'
		);
		error.code = 404;
		return next(error);
	}
	try {
		const sess = await mongoose.startSession();
		sess.startTransaction();
		await nuevoFavorito.save({
			session: sess,
		});
		usuario.favoritos.push(nuevoFavorito);
		await usuario.save({
			session: sess,
		});
		await sess.commitTransaction();
	} catch (error) {
		const err = new Error('No se han podido guardar los datos');
		err.code = 500;
		return next(err);
	}
	res.status(201).json({
		favoritos: nuevoFavorito,
	});
};

const eliminarFavorito = async (req, res, next) => {
	const idFavorito = req.params.fid;
	let favoritos;
	try {
		favoritos = await Favorito.findById(idFavorito).populate('creador');
	} catch (err) {
		const error = new Error(
			'Ha habido algún error. No se han podido recuperar los datos para eliminación'
		);
		error.code = 500;
		return next(error);
	}

	if (!favoritos) {
		const error = new Error(
			'No se ha podido encontrar un comic favorito con el id proporcionado'
		);
		error.code = 404;
		return next(error);
	}

	if (favoritos.creador.id !== req.userData.userId) {
		const err = new Error('No tiene permiso para eliminar este destino');
		err.code = 401; 
		return next(err);
	}

	try {
		const sess = await mongoose.startSession();
		sess.startTransaction();
		await favoritos.remove({
			session: sess,
		});
		favoritos.creador.favoritos.pull(favoritos);
		await favoritos.creador.save({
			session: sess,
		});
		await sess.commitTransaction();
	} catch (err) {
		const error = new Error(
			'Ha habido algún error. No se han podido eliminar los datos'
		);
		error.code = 500;
		return next(error);
	}
	res.json({
		message: 'Favorito eliminado',
	});
};


exports.recuperaFavoritos = recuperaFavoritos;
exports.crearFavorito = crearFavorito;
exports.eliminarFavorito = eliminarFavorito;
