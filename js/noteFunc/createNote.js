import { addFormToCreateNote } from "./addFormToCreateNote.js";
import { setNewObjNote } from "./setNewObjNote.js";
import { addNewNote } from "../data/notes.js";
import { addNoteButtonsListener } from "./addNoteButtonsListener.js";
import { renderActiveNotesTable, renderArchiveNotesTable } from "../render/renderNotesTable.js";
import { getNotes } from "../data/notes.js";

export const createNote = (tbody, notes) => {
    addFormToCreateNote();

    const createNoteBtn = document.querySelector('#createNote');
    const submitNoteBtn = document.querySelector('#submitNote');
    const closeFormBtn = document.querySelector('#closeForm');
    const parentForm = document.querySelector('.notes-form');
    const form = document.querySelector('#noteForm');
    const idNote = notes.reduce((accum, item) => {
        accum < item.id ? accum = item.id : accum = accum;
        return accum + 1;
    }, 0)
    console.log(idNote);

    createNoteBtn.disabled = true;

    submitNoteBtn.addEventListener('click', () => {


        const emptyValue =
            Array.from(form.elements).filter(
                (elem) => elem.tagName.toLowerCase() !== 'button' && elem.value === '',
            ).length > 0;

        if (!emptyValue) {
            const newNote = setNewObjNote(form, idNote);
            addNewNote(newNote);
            const updatedNotes = getNotes();
            renderActiveNotesTable(updatedNotes);
            renderArchiveNotesTable(updatedNotes);
            createNoteBtn.disabled = false;
            addNoteButtonsListener(tbody, updatedNotes);
        }
    })
    closeFormBtn.addEventListener('click', () => {
        tbody.removeChild(parentForm);
        createNoteBtn.disabled = false;
    });

    addNoteButtonsListener(tbody, notes);
}

