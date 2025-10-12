const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const URI = process.env.MONGO_URI;

const client = new MongoClient(URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

const findInMovies = async (userColl) => {
    const allDocs = userColl.find(
        {
            title: "The Room",
        },
        {
            sort: {
                "imdb.rating": -1,
            },
            projection: {
                _id: 0,
                title: 1,
                imdb: 1,
                awards: 1,
                writers: 1,
            },
        }
    );

    for await (const doc of allDocs) {
        console.dir(doc);
    }
};

const insertManyDocs = async (userColl) => {
    const b = await userColl.insertMany([
        {
            _id: 1,
            firstname: "OS",
            lastname: "roy",
            age: 99,
        },
        {
            _id: 1,
            firstname: "Event Loop",
            lastname: "Sharma",
            age: 12,
        },
        {
            _id: 4,
            firstname: "IO",
            lastname: "singh",
            age: 99,
        },
    ]);

    console.log(b);

    const names = database.listCollections(
        {},
        {
            nameOnly: true,
        }
    );

    for await (const doc of names) {
        console.dir(doc);
    }
};

const insertSingleDoc = async (userColl) => {
    await userColl.insertOne({
        firstname: "yash",
        lastname: "kumar",
        age: 21,
    });
};

const updateOneDoc = async (userColl) => {
    const res = await userColl.updateOne(
        {
            firstname: "yash",
        },
        {
            $set: {
                firstname: "siasiaj",
                lastname: "iii",
                age: 89,
                address: "sample...",
            },
        },
        {
            // upsert: true
        }
    );

    console.log(res);
};

const deleteOneDoc = async (userColl) => {
    await userColl.deleteOne({
        firstname: "yashbit"
    });
};

async function run() {
    try {
        await client.connect();
        const database = client.db("Sample_DB");
        const userColl = database.collection("User");

        await deleteOneDoc(userColl);
        // await updateOneDoc(userColl);

        // await insertManyDocs(userColl);
        // await insertSingleDoc(userColl);

        // const database = client.db("sample_mflix");
        // const userColl = database.collection("movies");

        // await findInMovies(userColl);
        // const ab = await userColl.countDocuments({
        //     year: 2004
        // });

        // const cnt1 = await userColl.countDocuments();
        // const cnt2 = await userColl.estimatedDocumentCount();
        // console.log(cnt1, cnt2);
    } finally {
        await client.close();
    }
}

run().catch(console.log);
