import { getNotes, removeOneNote } from '../data/notes.js';
import { renderActiveNotesTable } from '../render/renderNotesTable.js';

export const deleteNote = (deleteId ) => {
    removeOneNote(deleteId);
    const updatedNotes = getNotes();
    renderActiveNotesTable(updatedNotes)
}
