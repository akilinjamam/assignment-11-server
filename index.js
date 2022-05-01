const { MongoClient, ServerApiVersion } = require('mongodb');

const express = require('express')
const app = express();
const port = process.env.PORT || 5000
require('dotenv').config()




// this are middle ware
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log('CRUD server is running as server')
})

app.get('/', (req, res) => {
    res.send('running my node crud server')
})



// now local server is deployed to heroku and connected with mongodb now 



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8ajdo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    await client.connect()
    const productsCollection = client.db('exertion').collection('products')

    try {
        app.get('/products', async (req, res) => {
            const query = {}
            const cursor = productsCollection.find(query)
            const product = await cursor.toArray()
            res.send(product)
        })

    }
    finally {

    }
}

run().catch(console.dir)
