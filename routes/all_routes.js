const express = require("express");
const routesController = require("../controller/routesController");
const router = express.Router();

router.get("/convert-text", routesController.getText);
router.post("/convert", routesController.postText);
module.exports = router;
