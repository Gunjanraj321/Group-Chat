const express = require("express");
const router = express.Router();

const { getHomepage } = require("../controllers/mainPage");

router.get("/", getHomepage);

module.exports = router;
