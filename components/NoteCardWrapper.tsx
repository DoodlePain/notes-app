import React from "react";
import dynamic from "next/dynamic";
import { NoteData } from "@/types/notes";

interface NoteCardProps {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const NoteCardComponent = dynamic(
  () => import("./NoteCardClient").then((mod) => mod.NoteCardReact),
  { ssr: false }
);

export const NoteCardReact: React.FC<NoteCardProps> = (props) => {
  return <NoteCardComponent {...props} />;
};
