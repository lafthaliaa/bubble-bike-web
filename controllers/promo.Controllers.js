const db = require("../db");

exports.getPromo = (req, res) => {
  const sql = "SELECT * FROM promo"; 

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Database query failed" });
    }
    res.status(200).json(results);
  });
};
