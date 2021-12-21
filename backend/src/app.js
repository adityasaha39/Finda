const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8082;

const uri = "mongodb+srv://findadatabase:H6equKdFGKeeNz@cluster0.e8fmd.mongodb.net/data1?retryWrites=true&w=majority";

mongoose.connect(uri,
{ useNewUrlParser: true, useUnifiedTopology: true }
).then(()=> {
    console.log("connection succesfull");
}).catch((err)=>{
    console.log(err);
});


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
