  Dev Dependencies
  
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "method-override": "^3.0.0",
    "mongoose": "^6.0.12",
    "morgan": "^1.10.0"
  }
  
/////////////////////////
//  Database Models
/////////////////////////
const BookmarkSchema = new mongoose.Schema({
    title: String,
    url: String
})
const Bookmark = mongoose.model('Bookmark', BookmarkSchema)

![Alt Text](https://i.imgur.com/2hEQNfy.png)
