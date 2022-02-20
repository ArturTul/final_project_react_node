const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
app.listen(4000);

mongoose
  .connect(
    "mongodb+srv://adminas1:adminas1@cluster0.1gzxj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then((res) => {
    console.log("Connection established successfully");
  })
  .catch((e) => {
    console.log(e);
  });

const router = require("./routers/router");
app.use("/", router);
