const mongodb = require('mongodb');

const url = "mongodb+srv://Chakradhar:Chinnu@143@cluster0.c2li5.mongodb.net/randam?retryWrites=true&w=majority";
let db;

const mongoClient = new mongodb.MongoClient(url, { useUnifiedTopology: true });

mongoClient.connect(function(err) {
    try {
        if (err) {
            throw err;
        } else {
            console.log("Connection to MongoDB database established");
        }

    } catch (error) {
        console.log('Error while connecting to database' + error);
    }
    db = mongoClient.db("randam");
    global.db = db;
});

module.exports = mongodb;