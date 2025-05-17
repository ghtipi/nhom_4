const { MongoClient } = require("mongodb");
const fs = require("fs");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("ten_database");
    const data = JSON.parse(fs.readFileSync("./seeds/foods.json", "utf8"));
    const result = await db.collection("foods").insertMany(data);
    console.log(`Đã import ${result.insertedCount} món ăn.`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
