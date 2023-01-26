const mongoose = require("mongoose");
const validator = require("validator");

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "email is already exists"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    }
})

const Teacher = new mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;