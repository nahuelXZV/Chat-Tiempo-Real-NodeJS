const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/:userId', (req, res) => {
    controller.getChat(req.params.userId)
        .then((users) => {
            response.success(req, res, users, 200);
        })
        .catch((e) => {
            response.error(req, res, 'Unexpected Error', 500);
        });
})

router.post('/', (req, res) => {
    controller.addChat(req.body.users)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Datos incorrectos.', 400);
        });
})

module.exports = router;
