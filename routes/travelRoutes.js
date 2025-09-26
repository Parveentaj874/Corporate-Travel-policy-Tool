const express = require("express");
const router = express.Router();
const travelController = require("../controllers/travelController");

router.post("/", travelController.createTravel);
router.get("/", travelController.getAllTravels);

module.exports = router;
