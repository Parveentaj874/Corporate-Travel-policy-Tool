const express = require("express");
const router = express.Router();
const approvalController = require("../controllers/approvalController");

router.post("/:travelId", approvalController.createApproval);
router.get("/:travelId", approvalController.getApprovalsByTravel);

module.exports = router;
