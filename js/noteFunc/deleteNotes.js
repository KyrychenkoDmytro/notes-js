import { deleteAllNotes, getNotes } from "../data/notes.js";
import { renderActiveNotesTable, renderArchiveNotesTable } from "../render/renderNotesTable.js";

export const deleteNotes = () => {

    if (confirm('Do you want to delete all notes?')) {
        deleteAllNotes();
        const updatedNotes = getNotes();
        renderActiveNotesTable(updatedNotes);
        renderArchiveNotesTable(updatedNotes);
    }
}