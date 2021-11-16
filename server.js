/////////////////////////
//  DEPENDENCIES
/////////////////////////
//  doteven gets our env variables
require("dotenv").config()
//  Imports Express
const express = require("express")
//  Imports Mongoose
const mongoose = require("mongoose")
//  Logging
const morgan = require("morgan")
//  cors headers
const cors = require("cors")
//  Creates the app object
const app = express()
//  Pull PORT vairable from .env file
const {PORT=7777, MONGODB_URL} = process.env

/////////////////////////
//  Database Connection
/////////////////////////
// Establish Connecttion
mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

// Connection Events
mongoose.connection
.on("open", () => console.log("connected to mongo"))
.on("close", () => console.log("disconnected from mongo"))
.on("error", (error) => console.log(error))

/////////////////////////
//  Database Models
/////////////////////////
const BookmarkSchema = new mongoose.Schema({
    title: String,
    url: String
})
const Bookmark = mongoose.model('Bookmark', BookmarkSchema)

/////////////////////////
//  MiddleWare
/////////////////////////
//  Prevent cors errors
app.use(cors())
//  Logging
app.use(morgan('dev'))
//  Parse JSON bodies
app.use(express.json())

/////////////////////////
//  Routes and Routers
/////////////////////////
// TEST ROUTE
app.get("/", (req, res) => res.send("hello world"))

//  Index Route - get request to /bookmark gets us all the bookmarks
app.get("/bookmark", async (req, res) => {
    try {
        //  Send all bookmarks
        res.json(await Bookmark.find({}))
    } catch (error) {
        //  Send error
        res.status(400).json({error})
    }
})

//  Create Route - Post request to /bookmark
//  Create a person from json body
app.post("/bookmark", async (req, res) => {
    try{
        //  Creates a new bookmark
        res.json(await Bookmark.create(req.body))
    } catch (error){
        //  Send error message
        res.status(400).json({error})
    }
})

//  Update route - put request to /bookmark/:id
//  Updates a specified bookmark
app.put("/bookmark/:id", async (req, res) => {
    try {
        res.json(
            await Bookmark.findByIdAndUpdate(req.params.id, req.body, {new: true})
        )
    } catch (error){
        res.status(400).json({error})
    }
})

//  Destroy route - delete request to /bookmark/:id
//  Delete a specific bookmark
app.delete("/bookmark/:id", async (req, res) => {
    try {
        res.json(await Bookmark.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json({error})
    }
})

// LISTENER
app.listen(PORT, () => console.log(`port running on ${PORT}`))
