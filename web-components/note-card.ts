import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { editIcon } from "./icons/edit-icon";
import { trashIcon } from "./icons/trash-icon";

@customElement("note-card")
export class NoteCard extends LitElement {
  declare id: string;
  declare title: string;
  declare content: string;
  declare updatedAt: string;
  declare onDelete: (id: string) => void;
  declare onEdit: (id: string) => void;

  static properties = {
    id: { type: String },
    title: { type: String },
    content: { type: String },
    updatedAt: { type: String },
    onDelete: { type: Object },
    onEdit: { type: Object },
  };

  constructor() {
    super();
    this.id = "";
    this.title = "";
    this.content = "";
    this.updatedAt = "";
    this.onDelete = () => {};
    this.onEdit = () => {};
  }

  createRenderRoot() {
    return this;
  }

  private formatDate(dateString: string): string {
    if (!dateString) return "";

    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("it-IT", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (e) {
      return dateString;
    }
  }

  render() {
    return html`
      <div
        class="bg-yellow-50 border-4 border-black p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all overflow-hidden transform hover:-translate-y-1"
      >
        <div class="flex justify-between items-start mb-2">
          <h2 class="text-xl font-bold uppercase text-black">${this.title}</h2>
          <div class="flex gap-2">
            <button
              @click=${() => this.onEdit(this.id)}
              class="bg-blue-500 hover:bg-blue-600 text-white p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              title="Modifica nota"
            >
              ${editIcon}
            </button>
            <button
              @click=${() => this.onDelete(this.id)}
              class="bg-red-500 hover:bg-red-600 text-white p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              title="Elimina nota"
            >
              ${trashIcon}
            </button>
          </div>
        </div>
        <p class="text-black mb-4 break-all border-l-4 border-black pl-3">
          ${this.content}
        </p>
        <div
          class="text-sm text-black font-mono border-t-2 border-black pt-2 text-right"
        >
          ${this.formatDate(this.updatedAt)}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "note-card": NoteCard;
  }
}
