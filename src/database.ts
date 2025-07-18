// database.ts
import sqlite3 from "sqlite3";
import { Database } from "sqlite3";

const db: Database = new sqlite3.Database("./database.sqlite", (err) => {
  if (err) {
    console.error("❌ Failed to connect to DB:", err.message);
  } else {
    console.log("✅ Connected to SQLite");
    db.run(`
      CREATE TABLE IF NOT EXISTS articles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        type TEXT NOT NULL
      )
    `);
  }
});

export default db;
