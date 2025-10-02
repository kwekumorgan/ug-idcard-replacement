const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./server.env" });
const db = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("🚀 UG ID Card Replacement API is running...");
});

// Example API route (fetch all requests later)
app.get("/requests", (req, res) => {
  db.query("SELECT * FROM id_requests", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
