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

