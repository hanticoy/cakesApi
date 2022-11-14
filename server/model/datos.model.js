
const mongoose = require('../config/mongoose.config')


//Generamos un esquema de objeto JSON que almacenaremos
const kakesSchema = new mongoose.Schema(
    {
        user: { type: String, required: [true, 'Usuario: no puede ser vacio'] },
        imagenKake: { type: String, default:'' },
        cantStars:{type:Number, default:0},
        comentario:{type:String, default:''}
    }, { timestamps: true }
);



// crea un objeto que contenga métodos para que Mongoose interactúe con MongoDB
const kakes = mongoose.model('kake', kakesSchema);

module.exports = kakes;