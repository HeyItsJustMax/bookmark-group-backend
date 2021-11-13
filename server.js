require("dotenv").config()
const express = require("express")
const mongoose = require("./db/connection")
const morgan = require("morgan")
const cors = require("cors")
const app = express()
const {PORT=7777} = process.env


// TEST ROUTE
app.get("/", (req, res) => res.send("hello world"))

//  New route goes here Greg

// LISTENER
app.listen(PORT, () => console.log(`port running on ${PORT}`))
