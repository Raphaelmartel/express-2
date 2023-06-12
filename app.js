const express = require("express");
require("dotenv").config()

const app = express();

const port = process.env.APP_PORT ?? 3000;

const welcome = (req, res) => {
  res.send("Welcome to my favourite user list");
};

app.get("/", welcome);

const movieHandlers = require("./userHandlers");

app.get("/api/users", movieHandlers.getUsers);
app.get("/api/users/:id", movieHandlers.getUserById);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
