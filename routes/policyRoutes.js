// const express = require("express");
// const router = express.Router();
// const policyController = require("../controllers/policyController");

// router.post("/", policyController.createPolicy);
// router.get("/", policyController.getAllPolicies);

// module.exports = router;
const express = require("express");
const {
  createPolicy,
  getPolicies,
  getPolicyById,
  updatePolicy,
  deletePolicy,
} = require("../controllers/policyController");
const { authMiddleware, roleMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

// CRUD routes
router.post("/create", authMiddleware, roleMiddleware(["admin"]), createPolicy);
router.get("/list", authMiddleware, getPolicies);
router.get("/:id", authMiddleware, getPolicyById);
router.put("/:id", authMiddleware, roleMiddleware(["admin"]), updatePolicy);
router.delete("/:id", authMiddleware, roleMiddleware(["admin"]), deletePolicy);

module.exports = router;