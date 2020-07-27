const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb://afifwijaya:HlYPxVY5vBBreUFq@cluster0-shard-00-00-ni7p1.mongodb.net:27017,cluster0-shard-00-01-ni7p1.mongodb.net:27017,cluster0-shard-00-02-ni7p1.mongodb.net:27017/db_react-blog?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(5000);
