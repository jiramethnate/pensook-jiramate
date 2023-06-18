require("dotenv").config();
const createInitialProductData = require('../data/products')
const createInitialUserData = require('../data/user')

const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");

async function startMongoDBMemoryServer() {
  const mongod = new MongoMemoryServer();
  await mongod.start();

  const uri = await mongod.getUri();
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await createInitialProductData();
  await createInitialUserData();

}

startMongoDBMemoryServer().catch(console.error);
