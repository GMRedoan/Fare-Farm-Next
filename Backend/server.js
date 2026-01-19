import express from 'express';
import cors from 'cors';
import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fsw2asc.mongodb.net/?appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.get('/', (req, res) => {
  res.send('Fare Farm API is now running');
});


async function run() {
  try {
    await client.connect();

    const database = client.db('fare_farm_db')
    const productsCollection = database.collection('products')

    app.get('/products', async (req, res) => {
      const cursor = productsCollection.find()
      const result = await cursor.toArray()
      res.send(result)
    })

    app.get('/products/:id', async(req, res) => {
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const result = await productsCollection.findOne(query)
      res.send(result)
    })

    app.post('/products', async (req, res) => {
      const addProducts = req.body
      const result = await productsCollection.insertOne(addProducts)
      res.send(result)
    })


    console.log("Pinged your deployment. You successfully connected to MongoDB!");

  } finally {
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});