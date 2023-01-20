const express = require("express");
const dotenv = require("dotenv");
dotenv.config({path: "../.env"})

require("./db/conn")
const app = express();
const port = process.env.PORT || 3000;

// create a new student

app.get("/", (req,res) => {
    res.send("hello from root");
})

app.post("/students", (req,res) => {
    res.send("hello from student");
})

app.listen(port, () =>{
    console.log(`connection is set up at ${port}`)
});