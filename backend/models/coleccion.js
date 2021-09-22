const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;
const nuevaColeccion = new Schema({
    usuario: {
        type: [
            {
            type: mongoose.Types.ObjectId,
            ref: "Usuario",
            },
            ],
            default: [],
    },
    coleccion:{
        type: [
            {
            type: mongoose.Types.ObjectId,
            ref: "Comic",
            },
            ],
            default: [],
    }
})
nuevaColeccion.plugin(uniqueValidator);
module.exports = mongoose.model("Coleccion",nuevaColeccion);