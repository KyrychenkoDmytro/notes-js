import { archiveOneNote } from "../data/notes.js";
import { renderArchiveNotesTable } from "../render/renderNotesTable.js";
import { renderActiveNotesTable } from "../render/renderNotesTable.js";
import { getNotes } from "../data/notes.js";

export const archiveNote = (archiveId) => {
    archiveOneNote(archiveId);
    const updatedNotes = getNotes();
    renderActiveNotesTable(updatedNotes);
    renderArchiveNotesTable(updatedNotes);
}
