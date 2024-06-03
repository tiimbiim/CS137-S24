// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Initialize the Express application
const app = express();

// Define the port on which the server will run
const port = 3000;

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send("Hello World!");
});


// Connect to the MongoDB database
mongoose.connect('mongodb+srv://admin:uci-inf124@quizap.flfihwn.mongodb.net/?retryWrites=true&w=majority&appName=quizap')
.then(() => {
  console.log("Connected to database");
})
.catch((e) => {
  console.log("Connection to database failed");
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});