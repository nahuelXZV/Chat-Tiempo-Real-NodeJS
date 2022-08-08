const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const multer = require('multer');
const router = express.Router();

const upload = multer({
    dest: 'public/files/',
});


router.get('/', (req, res) => {

    const filterMessages = req.query.chat || null;
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch((e) => {
            response.error(req, res, 'Unexpected Error', 500);
        });
})

router.post('/', upload.single('file'), (req, res) => {
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
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
