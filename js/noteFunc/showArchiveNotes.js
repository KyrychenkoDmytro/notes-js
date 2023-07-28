import { findObjectsWithCategoryAndArchived } from "../data/notes.js";
import { renderArchiveNote } from "../render/renderFunc/renderArchiveNote.js";

export const showArchiveNotes = (value, visibleCategories) => {

    const foundNotes = findObjectsWithCategoryAndArchived(value);
    let rows = '';
    
    foundNotes.forEach((note) => {
        rows += renderArchiveNote(note);
    });

    const targetElement = document.querySelector(`[data-note-category="${value}"]`);

    if (targetElement) {
        targetElement.insertAdjacentHTML('afterend', rows);
        visibleCategories.add(value);
    }
}