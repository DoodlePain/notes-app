import React from "react";
import { createComponent } from "@lit/react";

import { NoteCard } from "../web-components/note-card";

import "../web-components/note-card";

export const NoteCardReact = createComponent({
  tagName: "note-card",
  elementClass: NoteCard,
  react: React,
});
