import { MAX_CONTENT_LENGTH } from "@/lib/const";
import React from "react";

interface InputProps {
  label: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isTextArea?: boolean;
}

export default function Input({
  label,
  value,
  onChange,
  isTextArea,
}: InputProps) {
  const wordCount = value.trim() ? value.trim().length : 0;
  const isOverLimit = wordCount > MAX_CONTENT_LENGTH;

  return (
    <div className="mb-4">
      <label className="block font-bold mb-2 uppercase text-sm">{label}</label>
      {isTextArea ? (
        <div className="relative">
          <textarea
            value={value}
            onChange={onChange}
            className="w-full border-2 border-black p-2 bg-white h-40"
            placeholder="Note content"
          />
          <div
            className={`absolute bottom-2 right-3 text-xs text-gray-500 ${
              isOverLimit ? "text-red-400" : ""
            }`}
          >
            {wordCount}/{MAX_CONTENT_LENGTH}
          </div>
        </div>
      ) : (
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="w-full border-2 border-black p-2 bg-white"
          placeholder="Note title"
        />
      )}
    </div>
  );
}
