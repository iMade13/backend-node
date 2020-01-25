//import express from 'express'
const express = require('express') //forma de traer los modulos

//const response = require('./network/response');
//const router = require('./components/message/network');
const router = require('./network/routes');


var app = express(); //inicializar 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(router);

router(app);

app.use('/app', express.static('public')); // Donde estará todos los archivos de la app


app.listen(3000);
console.log('La aplicación está escuchando en el puerto http://localhost:3000');