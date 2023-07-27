import { addFormToCreateNote } from "./addFormToCreateNote.js";
import { setNewObjNote } from "./setNewObjNote.js";
import { getNotes, addNewNote } from "../data/notes.js";
import { renderNote } from "../render/renderFunc/renderNote.js";

export const createNote = (tbody) => {
    let notes = getNotes();
    addFormToCreateNote();

    const createNoteBtn = document.querySelector('#createNote');
    const submitNoteBtn = document.querySelector('#submitNote');
    const parentForm = document.querySelector('.notes-form');
    const form = document.querySelector('#noteForm');
    const idNote = notes[notes.length - 1].id + 1;

    createNoteBtn.disabled = true;

    submitNoteBtn.addEventListener('click', () => {
        const newNote = setNewObjNote(form, idNote);

        const errors =
            Array.from(form.elements).filter(
                (el) => el.tagName.toLowerCase() !== 'button' && el.value === '',
            ).length > 0;


        if (!errors) {
            addNewNote(newNote);
            tbody.removeChild(parentForm);
            tbody.innerHTML += renderNote(newNote);
            createNoteBtn.disabled = false;
        }
    })
}

