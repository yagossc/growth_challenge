// Load the environment config
const dotenv = require('dotenv'); // FIXME: add a config module
config = dotenv.config();
if (config.error) {
    console.error(config.error);
    process.exit(1);
}

// Server module
const server = require('./api/server');

// Database module
const db = require('./store/db');

// Migrations
const migrations = require('./internal/migrations');

// define main
async function main() {
    try {
        await db.init(process.env.DB_DRIVER);
        console.log("Connected to the database");

        console.log("Running migrations...");
        await migrations.execMigrations('pg', 'postgres');
        console.log("Migrations OK.");

        await server.init();
        await server.run(process.env.TAPI_PORT);
        console.log("Server up and running. Listenning at "+process.env.TAPI_PORT);

    }catch(err){
        console.log("Error: "+err.message);
        process.exit(1);

    }
}

// call main
main();
