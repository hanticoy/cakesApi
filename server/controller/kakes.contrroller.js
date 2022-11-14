const Kakes = require('../model/datos.model')

module.exports = {
    queryAll: async function (req, res) {
        const kakes = await Kakes.find();
        res.json(kakes);
    },

    queryById: async function (req, res) {
        let id = req.params.id;
        Kakes.find({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    
    new: async function (req, res) {
        
        const body = req.body;
        const kake = new Kakes(body);
        kake.save()
        .then( data => res.json(data))
        .catch(err => res.json(err));
    },

    update: async function (req, res) {
        const body = req.body;
        const id = body._id;
        
        Kakes.findOneAndUpdate({_id: id}, {user:body.user, imagenKake:body.imagenKake, cantStars: body.cantStars,comentario: body.comentario }, function(err, data){
            if (err) {
                res.json(err)     
            }else{
                console.log('Api out:' + data);
                res.json(data);
            }
        }    
        );
            
    },

    delete: async function (req, res) {
        let id = req.params.id;
        Kakes.deleteOne({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
  
};



 