const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3300;
const app = express();

// Middlewaer
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server Start");
});

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
