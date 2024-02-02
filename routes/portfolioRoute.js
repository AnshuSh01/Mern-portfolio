const express = require("express");
const { sendEmailController } = require("../controllers/portfolioController");
const router = express.Router();

router.post("/sendemail", sendEmailController);

module.exports = router;
