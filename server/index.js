const express = require('express')
const bodyParser = require ('body-parser')
const ctrl = require('./controller')

const massive = require('massive')
require('dotenv').config()

const app = express()
const PORT = 4000

massive( process.env.CONNECTION_STRING ).then( database => {
    app.set('db', database)
   
})
// app.use(bodyParser.json());



app.listen(PORT, () => console.log("You are running on port 4000"))
