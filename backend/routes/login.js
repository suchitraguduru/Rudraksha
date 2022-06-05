const express = require("express");
const router = express.Router();
const { createEmployeeCredentials, signIn } = require("../controllers/Login");

router.post("/createemployeecredentials", createEmployeeCredentials);
router.post("/login", signIn);

module.exports = router;
