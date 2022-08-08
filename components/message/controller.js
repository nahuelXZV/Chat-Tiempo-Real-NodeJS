const store = require('./store');

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[messageController] No hay usuario o mensaje');
            return reject('Los datos son incorrectos');
        } else {
            const fullMessage = {
                user: user,
                message: message,
                date: new Date(),
            };
            store.add(fullMessage);
            resolve(fullMessage);
        }
    });
}

function getMessages(filterMessages) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterMessages));
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
            const result = store.remove(id).then(() => {
                resolve(result);
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