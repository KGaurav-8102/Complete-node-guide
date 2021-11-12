const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://Rohinikmr_85_500:aUHhJuOg5B9AyE48@nodeapp.lhzvz.mongodb.net/shop?retryWrites=true&w=majority')
.then(client => {
    console.log('Connected');
    _db = client.db();
    callback();
})
.catch(err => {
    console.log(err);
    throw err;
});
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;










/* const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_app', 'root', 'Gaurav@456789', {
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize; */