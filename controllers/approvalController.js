const Approval = require("../modules/approval/approval.model");

exports.createApproval = async (req, res) => {
  try {
    const approval = await Approval.create({
      travelId: req.params.travelId,
      approverId: req.body.approverId,
      status: req.body.status,
      comments: req.body.comments,
    });
    res.status(201).json(approval);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create approval" });
  }
};

exports.getApprovalsByTravel = async (req, res) => {
  try {
    const approvals = await Approval.findAll({ where: { travelId: req.params.travelId } });
    res.json(approvals);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch approvals" });
  }
};
