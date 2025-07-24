// require import mongo DB
const mongodb = require('mongodb');
const { getSecretValue } = require('../util/get-secret-value');

// create mongo client
const MongoClient = mongodb.MongoClient;

let database;

async function connecToDatabse() {
    // const client = await MongoClient.connect('mongodb://localhost:27017'); // default port
    // const MONGODB_URI = process.env.MONGODB_URI;
    // const MONGODB_URI = 'mongodb+srv://jeckmontano:cloudApplicationAIS@cloudapplicationais.ftzcy2s.mongodb.net/?retryWrites=true&w=majority&appName=CloudApplicationAIS'
    // const client = await MongoClient.connect('mongodb+srv://jeckmontano:aiscloudapplication@cloudapplicationais.64i13zm.mongodb.net/?retryWrites=true&w=majority&appName=CloudApplicationAIS'); // default port
    const MONGODB_URI = await getSecretValue("mongodb-uri-secret").MONGODB_URI
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

