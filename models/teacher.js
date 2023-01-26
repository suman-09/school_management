const mongoose = require("mongoose");
const validator = require("validator");

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        required: true
    },
    
})