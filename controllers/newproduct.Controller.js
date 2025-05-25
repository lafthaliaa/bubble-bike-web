const db = require("../db");

exports.getNewproduct = (req, res) => {
  const sql = "SELECT * FROM newproduct";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(result);
  });
};
