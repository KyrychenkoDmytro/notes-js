import { findOneNote, getNotes } from "../data/notes.js";
import { addFormToCreateNote } from "./addFormToCreateNote.js";
import { removeOneNote } from "../data/notes.js";
import { notes } from "../data/notes.js";
import { addNoteButtonsListener } from "./addNoteButtonsListener.js";
import { setNewObjNote } from "./setNewObjNote.js";
import { renderActiveNotesTable } from "../render/renderNotesTable.js";
import { updateOneNote } from "../data/notes.js";

export const editNote = (editId, note, tBody) => {
  const createNoteBtn = document.querySelector('#createNote');
  const findNote = findOneNote(editId);

  createNoteBtn.disabled = true;

  removeOneNote(editId);
  tBody.removeChild(note);


  addFormToCreateNote(findNote);
  const closeFormBtn = document.querySelector('#closeForm');
  const submitFormBtn = document.querySelector('#submitNote');
  const parentForm = document.querySelector('.notes-form');
  const form = document.querySelector('#noteForm');
  const previousDate = form.elements[1].value;
  const emptyValue =
    Array.from(form.elements).filter(
      (elem) => elem.tagName.toLowerCase() !== 'button' && elem.value === '',
    ).length > 0;

  submitFormBtn.addEventListener('click', () => {

    if (!emptyValue) {
      const newNote = setNewObjNote(form, editId, previousDate);
      updateOneNote(editId, newNote);
      const updatedNotes = getNotes();
      renderActiveNotesTable(updatedNotes);
      createNoteBtn.disabled = false;
      addNoteButtonsListener(tBody, updatedNotes);
    }

  })

  closeFormBtn.addEventListener('click', () => {

    if (!emptyValue) {
      updateOneNote(editId, findNote);
      const updatedNotes = getNotes();
      renderActiveNotesTable(updatedNotes);
      createNoteBtn.disabled = false;
      addNoteButtonsListener(tBody, updatedNotes);
    }
  })
  addNoteButtonsListener(tBody, notes);
}
