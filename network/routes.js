const express = require('express');

const router = function (server) {

    // Lista de rutas
    server.use("/message", require("../components/message/network"));

};

module.exports = router;