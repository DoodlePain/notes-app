import { NoteData } from "@/types/notes";
import { MAX_CONTENT_LENGTH, MAX_TITLE_LENGTH } from "./const";

export const validateNoteData = (note: Partial<NoteData>) => {
  if (!note.title || !note.content) {
    throw new Error("Title and content are required");
  }
  if (note.title.length - 1 > MAX_TITLE_LENGTH) {
    throw new Error(`Title must be less than ${MAX_TITLE_LENGTH} characters`);
  }
  if (note.content.length - 1 > MAX_CONTENT_LENGTH) {
    throw new Error(
      `Content must be less than  ${MAX_CONTENT_LENGTH} characters`
    );
  }
  return true;
};

export const sanitizeNote = (note: Partial<NoteData>) => {
  const sanitizedNote = {
    id: note.id,
    title: note.title?.trim(),
    content: note.content?.trim(),
  };
  return sanitizedNote;
};
