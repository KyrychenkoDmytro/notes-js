import { archiveOneNote } from "../data/notes.js";
import { renderArchiveNotesTable, renderActiveNotesTable } from "../render/renderNotesTable.js";
import { getNotes } from "../data/notes.js";

export const archiveNote = (archiveId) => {
    archiveOneNote(archiveId);
    const updatedNotes = getNotes();
    renderActiveNotesTable(updatedNotes);
    renderArchiveNotesTable(updatedNotes);
}
