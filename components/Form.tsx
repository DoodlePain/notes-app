import React from "react";
import Input from "./Input";

interface FormProps {
  title: string;
  content: string;
  onTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onContentChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Form({
  title,
  content,
  onTitleChange,
  onContentChange,
}: FormProps) {
  return (
    <>
      <Input label="Title" value={title} onChange={onTitleChange} />
      <Input
        label="Content"
        value={content}
        onChange={onContentChange}
        isTextArea
      />
    </>
  );
}
