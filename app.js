import { notes } from "./js/data/notes.js";
import { renderActiveNotesTable } from "./js/render/renderNotesTable.js";
import { renderArchiveNotesTable } from "./js/render/renderNotesTable.js";
import { createNote } from "./js/noteFunc/createNote.js";

const createNoteBtn = document.querySelector('.create-new-note');
const tbodyNotes = document.querySelector('.notes-table__body');

renderActiveNotesTable(tbodyNotes, notes);
renderArchiveNotesTable(notes);

createNoteBtn.addEventListener('click', () => createNote(tbodyNotes, notes));