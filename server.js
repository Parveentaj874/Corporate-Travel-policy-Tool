require("dotenv").config();
const express = require("express");
const sequelize = require("./config/db");

const app = express();
app.use(express.json());

// Routes
app.use("/api/travel", require("./routes/travelRoutes"));
app.use("/api/policy", require("./routes/policyRoutes"));
app.use("/api/approval", require("./routes/approvalRoutes"));
app.use("/api/safety", require("./routes/safetyRoutes"));


// Test route
app.get("/", (req, res) => res.send("Corporate Travel  App Backend Running"));

// Start server
const PORT = process.env.PORT || 5000;
sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
