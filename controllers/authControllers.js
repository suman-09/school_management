const Student = require("../models/students");

module.exports.student_register = (req,res) => {
    const user = new Student(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
}