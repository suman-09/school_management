const mongoose = require("mongoose");
const { isEmail } = require("validator");

const studentSchema = new mongoose.Schema({
    basicinfo: {
        name: {
            type: String,
            minlength: 2,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: [true, "email is already exists"],
            validate: [isEmail, 'Please enter a valid email']
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
    }
})

// creating a new collection using model
const Student = new mongoose.model('Student', studentSchema); //here you should write capital S and in singular form it will take students automatically ,, pehle student then you should write which schema should this follow in this case it will follow studentSchema

module.exports = Student;