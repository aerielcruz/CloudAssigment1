const mongoDbStore = require('connect-mongodb-session');
const expressSession = require('express-session');
// require('dotenv').config(); // For local development only, to load .env file

// const MONGODB_URI = process.env.MONGODB_URI;
function createSessionStore() {
    const MongoDBStore = mongoDbStore(expressSession);

    // const MONGODB_URI = 'mongodb+srv://jeckmontano:kvnFhz0wG80U2laY@cluster0.pekijnr.mongodb.net/';
    // Azure - const MONGODB_URI = 'mongodb+srv://jeckmontano:aiscloudapplication@cloudapplicationais.64i13zm.mongodb.net/?retryWrites=true&w=majority&appName=CloudApplicationAIS';
    const MONGODB_URI = 'mongodb+srv://jeckmontano:cloudApplicationAIS@cloudapplicationais.ftzcy2s.mongodb.net/?retryWrites=true&w=majority&appName=CloudApplicationAIS';
                         mongodb+srv://jeckmontano:cloudapplicatonAWS@clusteraws.w34mn8o.mongodb.net/?retryWrites=true&w=majority&appName=ClusterAWS
    // const MONGODB_URI = process.env.MONGODB_URI;
    // const MONGODB_URI = 'mongodb://localhost:27017';
    console.log('---- starting db -----');
    console.log('connecting:' + MONGODB_URI);
    console.log('----------');
    if (!MONGODB_URI) {
        console.error('ERROR: MONGODB_URI environment variable is not set.');
        process.exit(1); // Exit if critical variable is missing
    }

    const store = new MongoDBStore({
        uri: MONGODB_URI,
        getDb: 'online-shop',
        collection: 'sessions'
    });

    // Handle connection errors for the session store
    store.on('error', function (error) {
        console.error('MongoDB Session Store Error:', error);
    });

    return store;
}

function createSessionConfig() {
    return {
        // secret: 'super-secret',
        secret: process.env.SESSION_SECRET || 'super-secret',
        resave: false,
        saveUninitialized: false,
        store: createSessionStore(),
        cookie: {
            maxAge: 2 * 24 * 60 * 60 * 1000 // 2days
        }
    };
}


module.exports = createSessionConfig;