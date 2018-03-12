//Definicion de modelo para Mongoose
'use strict';
var mongoose =require('mongoose');
var Schema=mongoose.Schema;

var TaskSchema = new Schema({
    name:{
        type:String,
        required: 'Ingrese el nombre de la tarea'
    },
    Created_date:{
        type:Date,
        default:Date.now
    },
    status:{
        type:[{
            type:String,
            enum:['pendiente','realizandola','completada']
        }],
        default: ['pendiente']
    }
});

module.exports=mongoose.model('Task',TaskSchema);