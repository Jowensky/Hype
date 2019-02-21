const express = require("express");
const app = express();
const path = require('path');
var logger = require("morgan");
const cors = require('cors')
const mongoose = require("mongoose");

const router = require("./routes");

const PORT = process.env.PORT || 3001;

// Use morgan logger for logging requests
app.use(logger("dev"));
app.use(cors())
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(router);

app.get("*", function(req,res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Books", { useNewUrlParser: true });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});