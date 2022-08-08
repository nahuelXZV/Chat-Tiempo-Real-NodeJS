const db = require('mongoose');

db.Promise = global.Promise; 

async function connect() {
    await db.connect('', {
        useNewUrlParser: true,
    }).then(() => {
        console.log('[db] Conectada con éxito');
    }).catch(err => console.log(err));
}

module.exports = connect;