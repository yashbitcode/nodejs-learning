const { MongoClient, ServerApiVersion } = require("mongodb");

const URI = process.env.MONGO_URI;

// mongo client created and setting the mongo-client options 
const client = new MongoClient(URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});

console.log(client);

async function run() {
    try {
        // connecting the client to the server
        await client.connect();

        // ping the conn. confirmation 
        await client.db("User").command({
            ping: 1
        });

        console.log("Connection succ.");
    } finally {
        // ensuring client closes once done with everything
        await client.close();        
    }
}

run().catch(console.log);