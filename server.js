const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",       // your MySQL username
  password: "Abraham@2005",       // your MySQL password
  database: "ecommerce"
});

db.connect(err => {
  if (err) throw err;
  console.log("✅ Connected to MySQL database");
});

// Get all products
app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(results);
  });
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
