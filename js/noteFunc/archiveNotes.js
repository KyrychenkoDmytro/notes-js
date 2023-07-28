import { archiveAllNotes, getNotes } from "../data/notes.js";
import { renderActiveNotesTable, renderArchiveNotesTable } from "../render/renderNotesTable.js";

export const archiveNotes = () => {
  
    if (confirm('Do you want to archive all notes?')) {
      archiveAllNotes();
      const updatedNotes = getNotes();
      renderActiveNotesTable(updatedNotes);
      renderArchiveNotesTable(updatedNotes);
    }
}