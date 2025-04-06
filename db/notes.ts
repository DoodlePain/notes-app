import { NoteData } from "@/types/notes";
import { db } from ".";

export const findAllNotes = () => {
  const notes = db.prepare("SELECT * FROM notes").all() as NoteData[];
  if (notes) {
    return notes;
  }
  return [] as NoteData[];
};

export const createNote = (note: Partial<NoteData>) => {
  const createdAt = new Date().toISOString();
  const info = db
    .prepare(
      "INSERT INTO notes (title, content, createdAt, updatedAt) VALUES (?, ?, ?, ?)"
    )
    .run(note.title, note.content, createdAt, createdAt);
  return info;
};

export const updateNote = (noteId: string, note: Partial<NoteData>) => {
  const updatedAt = new Date().toISOString();
  const info = db
    .prepare(
      "UPDATE notes SET title = ?, content = ?, updatedAt = ? WHERE id = ?"
    )
    .run(note.title, note.content, updatedAt, noteId);
  if (info.changes === 0) {
    throw new Error("Note not found");
  }
  return info;
};

export const deleteNote = (id: string) => {
  const info = db.prepare("DELETE FROM notes WHERE id = ?").run(id);
  if (info.changes === 0) {
    throw new Error("Note not found");
  }
  return info;
};
