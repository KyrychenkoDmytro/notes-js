import { renderNote } from "./renderFunc/renderNote.js";
import { addNoteButtonsListener } from "../noteFunc/addNoteButtonsListener.js";

export const renderActiveNotesTable = (tbodyNotes, notes) => {
    const tableBody = document.querySelector('.notes-table__body');
    tableBody.innerHTML = '';
    notes.forEach((note) => {
        if (!note.archived) {
            tableBody.innerHTML += renderNote(note);
        }
    })
    addNoteButtonsListener(tbodyNotes, notes);
}

export const renderArchiveNotesTable = (notes) => {
    const tableBody = document.querySelector('.archives-table__body');
    tableBody.innerHTML = '';
    notes.forEach((note) => {
        if (note.archived) {
            tableBody.innerHTML += renderNote(note);
        }
    })
}
