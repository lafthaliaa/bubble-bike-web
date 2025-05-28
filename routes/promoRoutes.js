const express = require("express");
const router = express.Router();
const { getPromo } = require("../controllers/promoControllers");

router.get("/", getPromo);

module.exports = router;