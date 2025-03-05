// Importing required modules
const express = require("express");  // Express framework for building web applications
const morgan = require("morgan");    // Morgan for logging HTTP requests
const dotenv = require("dotenv");    // dotenv for loading environment variables
const colors = require("colors");    // colors for styling console logs

// Load environment variables from .env file
dotenv.config();

// Initialize an Express application
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to log HTTP requests in 'dev' mode
app.use(morgan("dev"));

// Define a test route
app.get("/", (req, res) => {
  res.status(200).send({
    message: "server running", // Response message when accessing the root route
  });
});

// Define the server port, defaulting to 8080 if not provided in environment variables
const port = process.env.PORT || 8080;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(
    `Server is running in ${process.env.NODE_MODE} mode on port ${process.env.PORT}`.bgCyan.white // Styled console log
  );
});
