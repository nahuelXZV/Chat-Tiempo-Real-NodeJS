const store = require('./store');
const socket = require('../../socket').socket;

function addMessage(chat, user, message, file) {
    return new Promise((resolve, reject) => {
        if (!chat || !user || !message) {
            console.error('[messageController] No hay usuario o mensaje');
            return reject('Los datos son incorrectos');
        } else {
            let fileUrl = '';
            if (file) {
                fileUrl = 'http://localhost:3000/app/files/' + file.filename;
            }
            const fullMessage = {
                chat: chat,
                user: user,
                message: message,
                date: new Date(),
                file: fileUrl,
            };

            store.add(fullMessage); // Add message to store
            socket.io.emit('message', fullMessage); // Emit to all clients
            resolve(fullMessage);   // Return full message
        }
    });
}

function getMessages(filterChat) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterChat));
    });
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            console.error('[messageController] No hay usuario o mensaje');
            reject('Invalid data');
        } else {
            const result = await store.updateText(id, message);
            resolve(result);
        }
    });
}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            console.error('[messageController] No hay usuario');
            reject('Invalid data');
        } else {
            store.remove(id).then(() => {
                resolve();
            }).catch(e => {
                reject(e);
            });
        }
    });
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
};