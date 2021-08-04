const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")


router.post("/signUp", userController.signUp);

router.get("/", userController.getUsers);

module.exports = router;