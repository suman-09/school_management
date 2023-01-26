const { Router } = require("express");
const authController = require("../controllers/authControllers");

const router = Router();

router.post("/students", authController.student_register);

module.exports = router;