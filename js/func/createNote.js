import { addFormToCreateNote } from "./addFormToCreateNote.js";

export const createNote = (tbody, notes) => {
    addFormToCreateNote();

    const createBtn = document.querySelector('.create-new-note');
    createBtn.disabled = true;
}