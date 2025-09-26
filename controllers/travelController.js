const Travel = require("../modules/travel/travel.model");

exports.createTravel = async (req, res) => {
  try {
    const travel = await Travel.create(req.body);
    res.status(201).json(travel);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create travel" });
  }
};

exports.getAllTravels = async (req, res) => {
  try {
    const travels = await Travel.findAll();
    res.json(travels);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch travels" });
  }
};
