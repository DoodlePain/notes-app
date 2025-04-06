import useSWR from "swr";
import { NoteData } from "@/types/notes";
import { useMemo, useState } from "react";
import { AddNote } from "@/components/AddNote";
import Background from "@/components/Background";
import { toast, ToastContainer } from "react-toastify";
import EditNoteModal from "@/components/EditNoteModal";
import { RefreshButton } from "@/components/RefreshButton";
import { NoteCardReact } from "../components/NoteCardWrapper";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState<string | null>(null);
  const { data, error, mutate, isLoading } = useSWR("/api/notes", fetcher, {
    onSuccess() {
      setLoading(false);
    },
    onError() {
      setLoading(false);
      toast.error("Errore nel caricamento delle note");
    },
  });

  const notes: NoteData[] = useMemo(() => {
    // Sort notes by updatedAt
    if (data?.success && data?.notes) {
      return data.notes.sort((a: NoteData, b: NoteData) => {
        return (
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
      });
    }
  }, [data]);

  const refreshNotes = () => {
    setLoading(true);
    mutate();
  };

  const onDelete = async (id: string) => {
    const response = await fetch(`/api/notes/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete note");
    }
    const data = await response.json();
    if (data.success) {
      refreshNotes();
      toast.success("Note deleted successfully");
    }
  };

  const onEditHandler = async (id: string) => {
    setEditId(id);
  };

  const noteToEdit = useMemo(() => {
    if (editId) {
      const note = notes.find((note) => {
        return note.id === editId;
      });
      if (note) {
        return note;
      }
    }
    return null;
  }, [editId, notes]);

  const onEditSave = async (note: NoteData) => {
    const response = await fetch(`/api/notes/${note.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    if (!response.ok) {
      throw new Error("Failed to update note");
    }
    const data = await response.json();
    if (data.success) {
      refreshNotes();
      toast.success("Note updated successfully");
    }
    setEditId(null);
  };

  const onEditClose = () => {
    setEditId(null);
  };

  return (
    <>
      <div className="flex w-full justify-center p-6 z-1 relative px-3 ">
        <Background />
        <main className="flex flex-col gap-[32px] items-start sm:items-start max-w-4xl w-full my-4">
          <div className="w-full">
            <AddNote onSubmit={refreshNotes} />
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <h1 className="text-3xl font-extralight text-gray-900 dark:text-gray-50 sm:text-6xl">
              Your notes
            </h1>
            <RefreshButton loading={loading} onClick={refreshNotes} />
          </div>

          {isLoading ? (
            <div className="w-full flex justify-center items-center my-20 h-[400px]">
              <div className="loader"></div>
            </div>
          ) : error ? (
            <div className="w-full text-center py-4 text-red-500">
              Error loading notes
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full min-h-[400px]">
              {notes.length === 0 ? (
                <div className="col-span-2 text-center py-4 text-gray-500 w-full flex items-center justify-center">
                  No notes found
                </div>
              ) : (
                notes.map((note) => (
                  <div
                    key={note.id}
                    className="animate-fade-in-up opacity-100 transform translate-y-4"
                  >
                    <NoteCardReact
                      onDelete={onDelete}
                      onEdit={onEditHandler}
                      {...note}
                    />
                  </div>
                ))
              )}
            </div>
          )}
        </main>
        <EditNoteModal
          isOpen={!!editId}
          note={noteToEdit}
          onClose={onEditClose}
          onSave={onEditSave}
        />
        <ToastContainer />
      </div>
    </>
  );
}
