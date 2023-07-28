import { addFormToCreateNote } from "./addFormToCreateNote.js";
import { setNewObjNote } from "./setNewObjNote.js";
import { addNewNote } from "../data/notes.js";
import { renderNote } from "../render/renderFunc/renderNote.js";
import { addNoteButtonsListener } from "./addNoteButtonsListener.js";

export const createNote = (tbody, notes) => {
    addFormToCreateNote();

    const createNoteBtn = document.querySelector('#createNote');
    const submitNoteBtn = document.querySelector('#submitNote');
    const closeFormBtn = document.querySelector('#closeForm');
    const parentForm = document.querySelector('.notes-form');
    const form = document.querySelector('#noteForm');
    const idNote = notes[notes.length - 1].id + 1;

    createNoteBtn.disabled = true;

    submitNoteBtn.addEventListener('click', () => {
        const newNote = setNewObjNote(form, idNote);

        const emptyValue =
            Array.from(form.elements).filter(
                (elem) => elem.tagName.toLowerCase() !== 'button' && elem.value === '',
            ).length > 0;


        if (!emptyValue) {
            addNewNote(newNote);
            tbody.removeChild(parentForm);
            tbody.innerHTML += renderNote(newNote);
            createNoteBtn.disabled = false;
            addNoteButtonsListener(tbody, notes);
        }
    })
    closeFormBtn.addEventListener('click', () => {
        tbody.removeChild(parentForm);
        createNoteBtn.disabled = false;
    });

    addNoteButtonsListener(tbody, notes);
}

