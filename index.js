// Load the environment config
const dotenv = require('dotenv'); // FIXME: add a config module
config = dotenv.config();
if (config.error) {
    console.error(config.error);
    process.exit(1);
}

// Server module
const server = require('./api/server');

// define main
async function main() {
    try {
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
