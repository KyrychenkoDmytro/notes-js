import { notes } from "./js/data/notes.js";
import { renderActiveNotesTable } from "./js/render/renderNotesTable.js";
import { renderArchiveNotesTable } from "./js/render/renderNotesTable.js";
import { createNote } from "./js/noteFunc/createNote.js";
import { archiveNotes } from "./js/noteFunc/archiveNotes.js";
import { deleteNotes } from "./js/noteFunc/deleteNotes.js";

const createNoteBtn = document.querySelector('.create-new-note');
const tbodyNotes = document.querySelector('.notes-table__body');
const archiveAllNotesBtn = document.querySelector('.notes-table__header-icons-archive-all');
const deleteAllNotesBtn = document.querySelector('.notes-table__header-icons-delete-all');


renderActiveNotesTable(notes);
renderArchiveNotesTable(notes);

createNoteBtn.addEventListener('click', () => createNote(tbodyNotes, notes));
archiveAllNotesBtn.addEventListener('click', () => archiveNotes());
deleteAllNotesBtn.addEventListener('click', () => deleteNotes());