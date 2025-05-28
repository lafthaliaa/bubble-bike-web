const express = require("express");
const router = express.Router();

const { getNewproduct } = require("../controllers/newproductControllers");

router.get("/", getNewproduct);

module.exports = router;