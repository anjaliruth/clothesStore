const express = require("express");
const app = express();
const cors = require("cors");
const pg = require("pg"); // Import the pg package
const PORT = 5001;
require("dotenv").config()

//Connect to database
const conString = process.env.CONNECTION_STRING; // Replace with your PostgreSQL URL
const client = new pg.Client(conString);

// Connect to the PostgreSQL server
client.connect(function(err) {
  if (err) {
    console.error("could not connect to postgres", err);
  } else {
    console.log("Connected to PostgreSQL");
  }
});
