import express from "express";
import db from "./database";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/articles", (req, res) => {
  db.all("SELECT * FROM articles", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
