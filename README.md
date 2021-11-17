# Team Members
- Nic Scobey - Tech Lead/ Frontend
- Maximillian Rice - Repo Owner/ Frontend
- Gregorio Moreta - Backend

# App Description
>This application is full CRUD functionality. A user can create, read, update, and delete bookmarks.

>Our application Is a basic single page react app using: 
- Express
- React
- Node.js
- MongoDB
- Postman
- Github
- HTML, CSS, Javascript

# Stretch Goals
>We would have liked to get to:
- User authentication
- Styling

# Dev Dependencies
 
 ```javascript
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "method-override": "^3.0.0",
    "mongoose": "^6.0.12",
    "morgan": "^1.10.0"
  }
 ```

# Database Models

```javascript
const BookmarkSchema = new mongoose.Schema({
    title: String,
    url: String
})
const Bookmark = mongoose.model('Bookmark', BookmarkSchema)
```


# Routing Table
![Alt Text](https://i.imgur.com/2hEQNfy.png)
