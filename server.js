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

<<<<<<< HEAD
module.exports = router;
=======
// API Routes
app.use("/api/travel", require("./routes/travelRoutes"));
app.use("/api/policy", require("./routes/policyRoutes"));
app.use("/api/approval", require("./routes/approvalRoutes"));
app.use("/api/safety", require("./routes/safetyRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

const approvalRoutes= require("./routes/approvalRoutes");
const policyRoutes = require("./routes/policyRoutes");
const travelRoutes = require("./routes/travelRoutes");

// Test route
app.get("/", (req, res) => res.send("Corporate Travel App Backend Running"));
// Serve login page at root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

// Start server
const PORT = process.env.PORT || 5000;
sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
>>>>>>> e14658f39a44853dd4d246f9de0f030c4440b805
