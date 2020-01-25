//Archivo para todas las rutas de los mensajes

const express = require('express');
const response = require('../../network/response')
const controller = require('./controller');

const router = express.Router(); //nos permite separar cabeceras, métodos, peticiones, url.

router.get("/", function(req, res) {
    controller.getMessage()
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e)
        })
});

router.post("/", function(req, res) {
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Información invalida', 400, 'error en el controller');
        });
});

module.exports = router;