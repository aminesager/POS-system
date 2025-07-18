import sqlite3 from "sqlite3";
import { Database } from "sqlite3";
import { createTables } from "./queries";

const db: Database = new sqlite3.Database("./database.sqlite", (err) => {
  if (err) {
    console.error("❌ Failed to connect to DB:", err.message);
  } else {
    console.log("✅ Connected to SQLite");
    db.exec(createTables, (err) => {
      if (err) console.error("❌ Failed to create tables:", err.message);
      else console.log("✅ Tables created or verified");
    });
  }
});

export default db;
