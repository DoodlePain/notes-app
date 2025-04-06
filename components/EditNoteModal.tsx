import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { NoteData } from "@/types/notes";
import Form from "./Form";

interface EditNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (note: NoteData) => Promise<void>;
  note: NoteData | null;
}

export default function EditNoteModal({
  isOpen,
  onClose,
  onSave,
  note,
}: EditNoteModalProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  const handleTitleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContent(e.target.value);
  };

  const validateForm = () => {
    if (title.trim() === "") {
      toast.error("Il titolo è obbligatorio");
      return false;
    }
    if (content.trim() === "") {
      toast.error("Il contenuto è obbligatorio");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await onSave({ ...note, title, content } as NoteData);
        onClose();
      } catch (error) {
        toast.error("Errore durante l'aggiornamento della nota");
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  flex items-center justify-center  p-4">
      <div className="fixed inset-0 bg-black opacity-50 z-25" />
      <div className="z-50 bg-yellow-50 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold uppercase">Edit note</h2>
          <button
            onClick={onClose}
            className="bg-black text-white px-3 py-1 border-2 border-black hover:bg-white hover:text-black"
          >
            X
          </button>
        </div>

        <Form
          title={title}
          content={content}
          onTitleChange={handleTitleChange}
          onContentChange={handleContentChange}
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="bg-white border-2 border-black px-4 py-2 font-bold hover:bg-gray-100"
          >
            CANCEL
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-yellow-200 text-black px-4 py-2 border-2 border-black font-bold hover:bg-yellow-400 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "SAVING..." : "SAVE"}
          </button>
        </div>
      </div>
    </div>
  );
}
