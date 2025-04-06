import React from "react";

interface InputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isTextArea?: boolean;
}

export default function Input({
  label,
  value,
  onChange,
  isTextArea,
}: InputProps) {
  return (
    <div className="mb-4">
      <label className="block font-bold mb-2 uppercase text-sm">{label}</label>
      {isTextArea ? (
        <textarea
          value={value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            onChange(e as any)
          }
          className="w-full border-2 border-black p-2 bg-white h-40"
          placeholder="Note content"
        />
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
