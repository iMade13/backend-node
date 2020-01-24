//import express from 'express'
const express = require('express') //forma de traer los modulos

const response = require('./network/response')

const router = express.Router(); //nos permite separar cabeceras, métodos, peticiones, url.
const app = express(); //inicializar 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

router.get("/message", function(req, res) {
    console.log(req.headers);
    res.header({
            "custom-header": "Nuestro valor perzonalidado",
        })
        //res.send("Lista de mensajes");
    response.success(req, res, 'Lista de mensajes');
});

router.post("/message", function(req, res) {
    console.log(req.query);
    if (req.query.error == "ok") {
        response.error(req, res, 'Error simulado', 500, 'Es una simulación de los errores');
    } else {
        response.success(req, res, 'Creado correctamente', 201);
    }

    //res.send("peticion de post ha sido borrada");
    // res.status(202).send({
    //     error: '',
    //     message: 'Creado correctamente'
    // });
});

router.patch("/message", function(req, res) {
    //console.log(req.body);
    //console.log(req.query);
    res.send("peticion de patch");
});

router.delete("/message", function(req, res) {
    //res.send();
    //res.send('Mensaje ' + req.body.text + ' añadido correctamente');

});

// app.use('/', function(req, res) {
//    res.send('Hola');
// })

app.use('/app', express.static('public')); // Donde estará todos los archivos de la app


app.listen(3000);
console.log('La aplicación está escuchando en el puerto http://localhost:3000');