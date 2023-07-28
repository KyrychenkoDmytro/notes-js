import { findOneNote } from "../data/notes.js";
import { addFormToCreateNote } from "./addFormToCreateNote.js";
import { removeOneNote } from "../data/notes.js";
import { notes } from "../data/notes.js";
import { addNoteButtonsListener } from "./addNoteButtonsListener.js";
import { renderNote } from "../render/renderFunc/renderNote.js";
import { addNewNote } from "../data/notes.js";
import { setNewObjNote } from "./setNewObjNote.js";

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
      console.log(previousDate);
      const newNote = setNewObjNote(form, editId, previousDate);
      addNewNote(newNote);
      tBody.removeChild(parentForm);
      tBody.innerHTML += renderNote(newNote);
      createNoteBtn.disabled = false;
      addNoteButtonsListener(tBody, notes);
    }
  })

  closeFormBtn.addEventListener('click', () => {

    if (!emptyValue) {
      tBody.removeChild(parentForm);
      createNoteBtn.disabled = false;
    }
  })
  addNoteButtonsListener(tBody, notes);
}
