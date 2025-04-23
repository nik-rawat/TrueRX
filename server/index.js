import express from "express";
import cors from "cors";

import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";
const client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const dbName = "mydatabase"; // Replace with your database name

const collectionName = "mycollection"; // Replace with your collection name

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
    }
);
app.get("/api/data", async (req, res) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const data = await collection.find({}).toArray();
        res.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    } finally {
        await client.close();
    }
}
); 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});