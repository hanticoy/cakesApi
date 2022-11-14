

module.exports = function (app) {

    const express = require('express');

    //instrucciones para devolver JSON de nuestra api
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    const kakesController = require('../controller/kakes.contrroller')
    
    app.get('/queryAll', function (req, res) {
       
        kakesController.queryAll(req,res);
    });

    app.get('/queryById/:id', function (req, res) {
        kakesController.queryById(req,res);
    });

    app.post('/new', function (req, res) {
        kakesController.new(req,res);
    });

    app.put('/update', function (req, res) {
        kakesController.update(req,res);
    });

    app.delete('/delete/:id', function (req, res) {
        kakesController.delete(req,res);
    });
}


