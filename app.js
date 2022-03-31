// // mongoose
// const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');
// const bodyParser = require("body-parser");
// require("dotenv").config();

// const path = require("path");

// // app.js

// const express = require('express');
// const connectDB = require('./config/db');
// // var cors = require('cors');
// const cors = require('cors');

// // routes
// const books = require('./routes/api/books');

// const app = express();
// app.use(cors());

// //import your models
// require("./models/Book");

// // Connect Database
// connectDB();

// require("dotenv").config()

//     mongoose
//      .connect(
//          process.env.MONGODB_CONNECTION_STRING,
//              {
//                useNewUrlParser: true,
//                useUnifiedTopology: true,
//              }
//      )
//      .then(() => console.log("MongoDB has been connected"))
//      .catch((err) => console.log(err));

  
// // cors
// app.use(cors({ origin: true, credentials: true }));

// // Init Middleware
// app.use(express.json({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.get('/', (req, res) => res.send('Hello world!'));

// // use Routes
// app.use('/api/books', books);

// const port = process.env.PORT || 8082;

// app.use(express.static(path.resolve(__dirname, "./mern-app/build")));

// app.get("*", function (request, response) {
//     response.sendFile(path.resolve(__dirname, "./mern-app/build", "index.html"));
//   });

//   app.listen(port, () => console.log(`Server running on port ${port}`));

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const cors = require("cors");

const app = express();
app.use(cors());

//import your models
require("./models/Book.js");

mongoose
  .connect(
    process.env.MONGODB_CONNECTION_STRING,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//import routes
require("./routes/api/books.js")(app);

const PORT = process.env.PORT || 8082;

// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./mern-app/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./mern-app/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});