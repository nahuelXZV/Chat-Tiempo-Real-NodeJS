const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) => {

    const filterMessages = req.query.user || null;

    res.header({
        'custom-header': 'Nuestro valor personalizado',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    });
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch((e) => {
            response.error(req, res, 'Unexpected Error', 500);
        });
})

router.post('/', (req, res) => {
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 200);
        })
        .catch(e => {
            response.error(req, res, 'Datos incorrectos.', 400);
        });
})

router.put('/:id', (req, res) => {
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500);
        });
})

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500);
        });
})

module.exports = router;
