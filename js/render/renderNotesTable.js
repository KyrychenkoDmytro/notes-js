import { renderNote } from "./renderFunc/renderNote.js";
import { addNoteButtonsListener } from "../noteFunc/addNoteButtonsListener.js";
import { renderCategory } from "./renderFunc/renderCategory.js";
import { setNewObjCategory } from "../noteFunc/setNewObjCategory.js";

export const renderActiveNotesTable = (notes) => {
    const tableBody = document.querySelector('.notes-table__body');
    tableBody.innerHTML = '';
    console.log(notes);
    notes.forEach((note) => {
        if (!note.archived) {
            tableBody.innerHTML += renderNote(note);
        }
    })
    addNoteButtonsListener(tableBody, notes);
}

export const renderArchiveNotesTable = (notes) => {
    const tableBody = document.querySelector('.archives-table__body')
    tableBody.innerHTML = '';
    const obj = setNewObjCategory(notes);
    console.log(obj);

renderCategory(obj, tableBody);
}
