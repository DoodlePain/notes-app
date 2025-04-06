import { NoteData } from "@/types/notes";

export const validateNoteData = (note: Partial<NoteData>) => {
  if (!note.title || !note.content) {
    throw new Error("Title and content are required");
  }
};

export const sanitizeNote = (note: Partial<NoteData>) => {
  const sanitizedNote = {
    id: note.id,
    title: note.title?.trim(),
    content: note.content?.trim(),
  };
  return sanitizedNote;
};
