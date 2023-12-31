const express = require("express");
require("dotenv").config()

const app = express();

const port = process.env.APP_PORT ?? 3000;

app.use(express.json());

const welcome = (req, res) => {
  res.send("Welcome to my favourite user list");
};

app.get("/", welcome);

const userHandlers = require("./userHandlers");

app.get("/api/users", userHandlers.getUsers);
app.get("/api/users/:id", userHandlers.getUserById);
app.post("/api/users", userHandlers.postUser);
app.put("/api/users/:id", userHandlers.updateUser);
app.delete("/api/users/:id", userHandlers.deleteUser);


app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
