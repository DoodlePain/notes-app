import Database from "better-sqlite3";

type SQLiteDB = InstanceType<typeof Database>;

const createNotesTable = `
CREATE TABLE IF NOT EXISTS notes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  createdAt TEXT NOT NULL,
  updatedAt TEXT NOT NULL
)
`;

export const initDb = (db: SQLiteDB) => {
  db.exec(createNotesTable);
  return;
};
