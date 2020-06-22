// Server module
const server = require('./api/server');

console.log("Hello Growth");

// define main
async function main() {
    try {
        await server.init();
        await server.run(8080);
        console.log("Server up and running. Listenning at 8080");

    }catch(err){
        console.log("Error: "+err.message);
        process.exit(1);

    }
}

// call main
main();
