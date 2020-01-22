//import express from 'express'

const express = require('express') //forma de traer los modulos

var app = express(); //inicializar 

app.use('/', function(req, res) {
    res.send('Hola');

})

app.listen(3000);

console.log('La aplicación está escuchando en el puerto http://localhost:3000');