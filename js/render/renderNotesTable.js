import { renderNote } from "./renderFunc/renderNote.js";
import { addNoteButtonsListener } from "../noteFunc/addNoteButtonsListener.js";
import { addUnarchiveButtonsListener } from "../noteFunc/addUnarchiveButtonsListener.js";
import { renderCategory } from "./renderFunc/renderCategory.js";
import { setNewObjCategory } from "../noteFunc/setNewObjCategory.js";
import { showArchiveNotes } from "../noteFunc/showArchiveNotes.js";

export const renderActiveNotesTable = (notes) => {
    const tableBody = document.querySelector('.notes-table__body');
    tableBody.innerHTML = '';
    console.log(notes);
    notes.forEach((note) => {
        if (!note.archived) {
            tableBody.innerHTML += renderNote(note);
        }
    })
    addNoteButtonsListener(tableBody, notes);
}

export const renderArchiveNotesTable = (notes) => {
    const tableBody = document.querySelector('.archives-table__body');
    tableBody.innerHTML = '';
    const obj = setNewObjCategory(notes);

    renderCategory(obj, tableBody);

    const allRows = document.querySelectorAll('.show-notes');

    let visibleCategories = new Set();

    allRows.forEach((row) => {
        const categoryValue = row.dataset.noteCategory;

        const hideCategories = (category) => {
            const visibleRows = document.querySelectorAll(`[data-note-category="${category}"].createdNote`);
            visibleRows.forEach((visibleRow) => {
                visibleRow.remove();
            });
            visibleCategories.delete(category);
        }

        const handleClick = () => {
            if (visibleCategories.has(categoryValue)) {
                hideCategories(categoryValue);
            } else {
                showArchiveNotes(categoryValue, visibleCategories);
            }
            addUnarchiveButtonsListener(tableBody, notes);
        }

        row.addEventListener('click', handleClick);
    });
}
