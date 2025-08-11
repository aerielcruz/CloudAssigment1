// require import mongo DB
const mongodb = require('mongodb');
const { getParameterStore } = require('../util/get-parameter-store');

// create mongo client
const MongoClient = mongodb.MongoClient;

let database;

async function connecToDatabse() {
    const MONGODB_URI = await getParameterStore("mongodb-uri")
    const client = await MongoClient.connect(MONGODB_URI); // default port
    database = client.db('online-shop');
}

function getDb() {
    if (!database) {
        throw new Error('You must connect to database');
    }
    return database;
}

module.exports = {
    connecToDatabse: connecToDatabse,
    getDb: getDb
}

