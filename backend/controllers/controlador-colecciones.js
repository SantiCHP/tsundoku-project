// controlador-colecciones.js

const { validationResult } = require('express-validator');
const mongooseUniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const Colecciones = require('../models/coleccion');
const Usuario = require('../models/usuario');

const recuperaColecciones = async (req, res, next) => {
	coleccion = await Colecciones.find();
	console.log(coleccion);
	try {
		coleccion = await Colecciones.find();
	} catch (err) {
		const error = new Error(
			'Ha habido algún error. No se han podido recuperar los datos'
		);
		error.code = 500;
		return next(error);
	}
	if (!coleccion) {
		const error = new Error(
			'No se ha podido encontrar una coleccion con el id proporcionado'
		);
		error.code = 404;
		return next(error);
	}
	res.json({
		coleccion: coleccion,
	});
};

const crearColeccion = async (req, res, next) => {
	const errores = validationResult(req); 
	if (!errores.isEmpty()) {
		const error = new Error('Error de validación. Compruebe sus datos');
		error.code = 422;
		return next(error);
	}
	const {  } = req.body;
	const nuevaColeccion = new Coleccion({
		
	});

	let usuario; 
	try {
		usuario = await Usuario.findById(creador);
	} catch (error) {
		const err = new Error('Ha fallado la creación de la coleccion');
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
		await nuevaColeccion.save({
			session: sess,
		});
		usuario.coleccion.push(nuevaColeccion);
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
		coleccion: nuevaColeccion,
	});
};

const eliminarColeccion = async (req, res, next) => {
	const idColeccion = req.params.cid;
	let coleccion;
	try {
		coleccion = await coleccion.findById(idColeccion).populate('creador');
	} catch (err) {
		const error = new Error(
			'Ha habido algún error. No se han podido recuperar los datos para eliminación'
		);
		error.code = 500;
		return next(error);
	}

	if (!coleccion) {
		const error = new Error(
			'No se ha podido encontrar una coleccion con el id proporcionado'
		);
		error.code = 404;
		return next(error);
	}

	if (coleccion.creador.id !== req.userData.userId) {
		const err = new Error('No tiene permiso para eliminar este destino');
		err.code = 401; 
		return next(err);
	}

	try {
		const sess = await mongoose.startSession();
		sess.startTransaction();
		await coleccion.remove({
			session: sess,
		});
		coleccion.creador.coleccion.pull(coleccion);
		await coleccion.creador.save({
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
		message: 'Coleccion eliminada',
	});
};


exports.recuperaColecciones = recuperaColecciones;
exports.crearColeccion = crearColeccion;
exports.eliminarColeccion = eliminarColeccion;
