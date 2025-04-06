import { createNote, findAllNotes } from "@/db/notes";
import { sanitizeNote, validateNoteData } from "@/lib/noteUtil";
import { NoteResponse } from "@/types/api";
import { NoteData } from "@/types/notes";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<NoteResponse>
) {
  if (req.method === "GET") {
    getHandler(req, res);
    return;
  } else if (req.method === "POST") {
    postHandler(req, res);
    return;
  }
  res.status(405).json({ success: false });
  return;
}

// GET /api/notes

const getHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const notes = findAllNotes();
  if (notes) {
    // Added delay to simulate a slow API
    setTimeout(() => {
      res.status(200).json({ success: true, notes });
    }, 500);
  }
  return;
};

// POST /api/notes

const postHandler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const userNote = req.body;
    const sanitizedNote = sanitizeNote(userNote);
    validateNoteData(userNote);

    if (sanitizedNote) {
      const result = createNoteHandler(sanitizedNote);
      if (result) {
        res.status(200).json({ success: true });
        return;
      }
    }
  } catch (error: any) {
    console.error(`🚀 [POST ${req.url}] Error : ${error.message}`);
    return res
      .status(400)
      .json({ success: false, error: error.message || "Invalid note" });
  }
};

const createNoteHandler = (note: Partial<NoteData>) => {
  const info = createNote(note);
  if (info?.changes === 0) {
    throw new Error("Failed to create note");
  }
  return true;
};
