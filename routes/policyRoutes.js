const express = require("express");
const router = express.Router();
const policyController = require("../controllers/policyController");

router.post("/", policyController.createPolicy);
router.get("/", policyController.getAllPolicies);

module.exports = router;
