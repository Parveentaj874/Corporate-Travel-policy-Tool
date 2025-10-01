const express = require("express");
<<<<<<< HEAD
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
=======
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
>>>>>>> e14658f39a44853dd4d246f9de0f030c4440b805

module.exports = router;
