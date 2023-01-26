const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
dotenv.config({path: ".env"});

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())  // use this as to get json response

// data base connection
const dbURI = process.env.MONGODB_URL;
mongoose.set('strictQuery', true);
mongoose.connect(dbURI,{
}).then(() => {
    console.log("connection is established");
}).catch((e) => {
    console.log(e);
})

// routes
app.get("/", (req,res) => {
    res.send("hello from root");
})
app.use(authRoutes);

app.listen(port, () =>{
    console.log(`connection is set up at ${port}`)
});