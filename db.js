const db = require('mongoose');

db.Promise = global.Promise;

async function connect() {
    await db.connect('mongodb+srv://nahuel:Fireware123@nahuelxzv.8vcvv0p.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
    }).then(() => {
        console.log('[db] Conectada con éxito');
    }).catch(err => console.log(err));
}

module.exports = connect;