const Model = require('./model');

function addUser(user) {
    const newUser = new Model(user);
    return newUser.save();
}

async function getUser(filterUser) {
    let filter = {};
    if (filterUser !== null) {
        filter = { name: filterUser };
    }
    const user = await Model.find(filter);
    return user;
}

module.exports = {
    add: addUser,
    list: getUser,
};