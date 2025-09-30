const express = require("express");
const router = express.Router();
const {
  createTravel,
  getAllTravels,
} = require("../controllers/travelController");
const { authMiddleware, roleMiddleware } = require("../middleware/authMiddleware");

// Admin (or manager) creates travel
router.post("/", authMiddleware, roleMiddleware(["admin"]), createTravel);

// Any logged-in user can list travels (optional: restrict to admin/manager)
router.get("/", authMiddleware, getAllTravels);

module.exports = router;
