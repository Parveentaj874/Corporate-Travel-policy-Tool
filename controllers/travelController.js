// controllers/travelController.js
const { Travel, Policy } = require("../modules");

exports.createTravelRequest = async (req, res) => {
  try {
    const { destination, purpose, startDate, endDate, budget, policyId, emergencyContact } = req.body;

    const policy = await Policy.findByPk(policyId);
    if (!policy) return res.status(400).json({ message: "Invalid policy ID" });

    const travel = await Travel.create({
      employeeName: req.user.name, // employee name from token
      destination,
      purpose,
      startDate,
      endDate,
      budget,
      policyId,
      emergencyContact,
      userId: req.user.id,
    });

    res.status(201).json({ message: "Travel request submitted", travel });
  } catch (err) {
    console.error("Create Travel Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getMyTravelRequests = async (req, res) => {
  try {
    const travels = await Travel.findAll({ where: { userId: req.user.id } });
    res.json(travels);
  } catch (err) {
    console.error("Get My Travels Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllTravelRequests = async (req, res) => {
  try {
    const travels = await Travel.findAll({ include: [Policy] });
    res.json(travels);
  } catch (err) {
    console.error("Get All Travels Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
