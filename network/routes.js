const express = require('express');

const router = function (server) {

    // Lista de rutas
    server.use("/message", require("../components/message/network"));
    server.use("/user", require("../components/user/network"));
    server.use("/chat", require("../components/chat/network"));

};

module.exports = router;