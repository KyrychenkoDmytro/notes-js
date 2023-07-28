import { renderForm } from "../render/renderFunc/renderForm.js";

export const addFormToCreateNote = (note) => {
    const tableBody = document.querySelector('.notes-table__body');
    tableBody.innerHTML += renderForm(note);
}