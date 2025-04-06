import { deleteNote, updateNote } from "@/db/notes";
import { sanitizeNote, validateNoteData } from "@/lib/noteUtil";
import { NoteResponse } from "@/types/api";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<NoteResponse>
) {
  if (req.method === "PUT") {
    putHandler(req, res);
    return;
  } else if (req.method === "DELETE") {
    deleteHandler(req, res);
    return;
  }
  res.status(405).json({ success: false });
  return;
}

// PUT /api/notes
const putHandler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const noteId = req.query.id as string;
    const userNote = req.body;
    if (!noteId) {
      throw new Error("Invalid note id");
    }
    const sanitizedNote = sanitizeNote(userNote);
    validateNoteData(sanitizedNote);
    updateNote(noteId, sanitizedNote);
    res.status(200).json({ success: true });
    return;
  } catch (error: any) {
    console.error(`🚀 [PUT ${req.url}] Error : ${error.message}`);
    return res
      .status(400)
      .json({ success: false, error: error.message || "Invalid note" });
  }
};

// DELETE /api/notes

const deleteHandler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const noteId = req.query.id as string;
    const userNote = req.body;
    if (!noteId) {
      throw new Error("Invalid note id");
    }
    deleteNote(noteId);
    res.status(200).json({ success: true });
    return;
  } catch (error: any) {
    console.error(`🚀 [DELETE ${req.url}] Error : ${error.message}`);
    return res
      .status(400)
      .json({ success: false, error: error.message || "Invalid note" });
  }
};
