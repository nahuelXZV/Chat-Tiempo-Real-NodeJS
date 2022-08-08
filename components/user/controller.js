const store = require('./store');

function addUser(username) {
    return new Promise((resolve, reject) => {
        if (!username) {
            console.error('[messageController] No hay nombre');
            return reject('Los datos son incorrectos');
        } else {
            const fullUser = {
                name: username,
            };
            store.add(fullUser);
            return resolve(fullUser);
        }
    });
}

function getUser(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    });
}

module.exports = {
    addUser,
    getUser
};