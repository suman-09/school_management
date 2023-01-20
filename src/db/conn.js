const mongoose = require("mongoose");

const dbURI = process.env.MONGODB_URL;

mongoose.set('strictQuery', true);
mongoose.connect(dbURI,{
}).then(() => {
    console.log("connection is established");
}).catch((e) => {
    console.log(e);
})


