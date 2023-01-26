const mongoose = require("mongoose");
const { isEmail } = require("validator");

const principalSchema = new mongoose.Schema({
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

const Principal = new mongoose.model('Principal', principalSchema);
module.exports = Principal;