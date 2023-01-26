const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        minlength: 2
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

// creating a new collection using model
const Student = new mongoose.model('Student', studentSchema); //here you should write capital S and in singular form it will take students automatically ,, pehle student then you should write which schema should this follow in this case it will follow studentSchema

module.exports = Student;