// Get dependencies
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

var items = require("./server/routes/items");

const app = express() // Initialize our app variable
const port = 3000 // port for server

const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/workflowy', { useNewUrlParser: true })

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

//app.use('/', router);

// use items route
app.use('/items', items);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
