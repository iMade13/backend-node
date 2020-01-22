//import express from 'express'
const express = require('express') //forma de traer los modulos
const router = express.Router(); //nos permite separar cabeceras, métodos, peticiones, url.

var app = express(); //inicializar 

app.use(router);

router.get("/", function(req, res) {
    res.send("peticion de get");
});

router.post("/", function(req, res) {
    res.send("peticion de post");
});

router.patch("/", function(req, res) {
    res.send("peticion de patch");
});

router.delete("/", function(req, res) {
    res.send("peticion de delete");
});

// app.use('/', function(req, res) {
//    res.send('Hola');
// })

app.listen(3000);

console.log('La aplicación está escuchando en el puerto http://localhost:3000');