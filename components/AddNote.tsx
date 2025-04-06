import React, { useState } from "react";
import { toast } from "react-toastify";
import Form from "./Form";

interface AddNoteProps {
  onSubmit: () => void;
}

export const AddNote: React.FC<AddNoteProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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

  const submitNote = async () => {
    const response = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
    if (!response.ok) {
      throw new Error("Failed to add note");
    }
    const data = await response.json();
    if (data.success) {
      toast.success("Note added successfully");
    }
  };

  const validateForm = () => {
    if (title.trim() === "") {
      toast.error("Title is required");
      return false;
    }
    if (content.trim() === "") {
      toast.error("Content is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      await submitNote();
      setTitle("");
      setContent("");
      onSubmit();
    }
  };

  return (
    <div className="flex gap-4 flex-col">
      <h1 className="text-3xl font-extralight text-gray-900 dark:text-gray-50 sm:text-6xl">
        Add note
      </h1>
      <div className="shadow-md hover:shadow-lg transition-all p-4 overflow-hidden bg-yellow-50  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border">
        <Form
          title={title}
          content={content}
          onTitleChange={handleTitleChange}
          onContentChange={handleContentChange}
        />
        <button
          className="bg-yellow-200 hover:bg-yellow-400 font-bold w-full text-black px-4 py-3 border-4 border-black p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all overflow-hidden transform hover:-translate-y-1"
          onClick={handleSubmit}
        >
          ADD NOTE
        </button>
      </div>
    </div>
  );
};

export default AddNote;
