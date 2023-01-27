const Student = require("../models/students");
const Teacher = require("../models/teachers");
const Principal = require("../models/principals");

// crating students
module.exports.student_register = (req,res) => {
    const user = new Student(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
}

// creating teachers
module.exports.teacher_register = (req,res) => {
    const user = new Teacher(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
}
// creating principal
module.exports.principal_register = (req,res) => {
    const user = new Principal(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
}