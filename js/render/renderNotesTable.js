import { renderNote } from "./renderFunc/renderNote.js";

export const renderActiveNotesTable = (notes) => {
    const tableBody = document.querySelector('.notes-table__body');
    tableBody.innerHTML = '';
    notes.forEach((note) => {
        if(!note.archived) {
            tableBody.innerHTML += renderNote(note);
        }
    })
}

export const renderArchiveNotesTable = (notes) => {
    const tableBody = document.querySelector('.archives-table__body');
    tableBody.innerHTML = '';
    notes.forEach((note) => {
        if(note.archived) {
            tableBody.innerHTML += renderNote(note);
        }
    })
}
