// routes/travelRoutes.js
const express = require("express");
const {
  createTravelRequest,
  getMyTravelRequests,
  getAllTravelRequests,
} = require("../controllers/travelController");
const { authMiddleware, roleMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/request", authMiddleware, roleMiddleware(["employee"]), createTravelRequest);
router.get("/my-requests", authMiddleware, roleMiddleware(["employee"]), getMyTravelRequests);
router.get("/all", authMiddleware, roleMiddleware(["admin", "manager"]), getAllTravelRequests);

module.exports = router;
