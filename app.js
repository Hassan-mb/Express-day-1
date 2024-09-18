const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./database");
const accountsRouter = require("./apis/accounts/router");
const dotenv = require("dotenv");
dotenv.config();

const PORT = 8000;
const app = express();
app.use(express.json());

app.use(accountsRouter);

connectDB();

app.listen(8000, () => {
  console.log(`The application is running on port ${PORT}`);
});
