import { unarchiveOneNote, getNotes } from "../data/notes.js";
import { renderActiveNotesTable, renderArchiveNotesTable } from "../render/renderNotesTable.js";

export const addUnarchiveButtonsListener = (tBody, notes) => {
    const allButtons = document.querySelectorAll('.unArchiveNote');
    console.log(allButtons);
    allButtons.forEach((butt) => {
        butt.addEventListener('click', () => {
            const idUnarchive = butt.getAttribute('data-unarchive-id');
            unarchiveOneNote(idUnarchive);
            const updatedNotes = getNotes();
            renderActiveNotesTable(updatedNotes);
            renderArchiveNotesTable(updatedNotes);
        })
    });
}
