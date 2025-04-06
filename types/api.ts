import { NoteData } from "./notes";

export interface NoteResponse {
  success: boolean;
  note?: NoteData;
  notes?: NoteData[];
}
