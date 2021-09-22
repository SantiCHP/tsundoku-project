const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;
const nuevoComic = new Schema({
    titulo:{
        type:String,
        require:true,
        unique:true
    },
    autor:{
        type:String,
        require:true
    },
    coleccion:{
        type:String,
        require:true
    },
    editorial:{
        type:String,
        require:true
    },
    serie:{
        type:String,
        require:true
    },
    descripcion:{
        type:String,
        require:true
    },
    caratula:{
        type:String,
        require:true
    }
})
nuevoComic.plugin(uniqueValidator);
module.exports = mongoose.model("Comic",nuevoComic);