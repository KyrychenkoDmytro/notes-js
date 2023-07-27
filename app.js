import { notes } from "./js/data/notes.js";
import { renderActiveNotesTable } from "./js/render/renderNotesTable.js";
import { renderArchiveNotesTable } from "./js/render/renderNotesTable.js";
// import { addFormToCreateNote } from "./js/func/addFormToCreateNote.js";
// import { closeForm } from "./js/func/closeForm.js";
import { createNote } from "./js/noteFunc/createNote.js";

const createNoteBtn = document.querySelector('.create-new-note');
// const closeFormBtn = document.querySelector('.notes-table__body-form-close');
const tbodyNotes = document.querySelector('.notes-table__body');

renderActiveNotesTable(notes);
renderArchiveNotesTable(notes);

createNoteBtn.addEventListener('click', () => createNote(tbodyNotes));
// closeFormBtn.addEventListener('click', closeForm)