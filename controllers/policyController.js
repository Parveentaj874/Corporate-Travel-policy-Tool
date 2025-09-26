const Policy = require("../modules/policy/policy.model");

exports.createPolicy = async (req, res) => {
  try {
    const policy = await Policy.create(req.body);
    res.status(201).json(policy);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create policy" });
  }
};

exports.getAllPolicies = async (req, res) => {
  try {
    const policies = await Policy.findAll();
    res.json(policies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch policies" });
  }
};
