const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) => {
    const filterUser = req.query.name || null;
    controller.getUser(filterUser)
        .then((userList) => {
            response.success(req, res, userList, 200);
        })
        .catch((e) => {
            response.error(req, res, 'Unexpected Error', 500);
        });
})

router.post('/', (req, res) => {
    controller.addUser(req.body.name)
        .then((fullUser) => {
            response.success(req, res, fullUser, 200);
        })
        .catch(e => {
            response.error(req, res, 'Datos incorrectos.', 400);
        });
})

module.exports = router;
