import Database from "better-sqlite3";
import path from "path";
import { initDb } from "./init";

export let db: any;

try {
  const dbPath = path.resolve("db/db.sqlite");
  db = new Database(dbPath, { verbose: console.log });
  db.pragma("journal_mode = WAL");
  initDb(db);
  console.log("SQLite database connected successfully");
} catch (error) {
  console.error("Failed to connect to SQLite database:", error);
}
