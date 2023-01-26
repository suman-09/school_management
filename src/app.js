const express = require("express");
const dotenv = require("dotenv");
const Student = require("./models/students");
dotenv.config({path: "../.env"});

require("./db/conn")
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())  // use this as to get json response

// create a new student

app.get("/", (req,res) => {
    res.send("hello from root");
})

app.post("/students", (req,res) => {
    
    const user = new Student(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })

})

app.listen(port, () =>{
    console.log(`connection is set up at ${port}`)
});