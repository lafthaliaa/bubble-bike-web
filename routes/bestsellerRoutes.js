const express = require("express");
const router = express.Router();
const { getBestseller } = require("../controllers/bestsellerControllers");

router.get("/", getBestseller);

module.exports = router;
