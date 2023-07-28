import { archiveOneNote } from "../data/notes.js";
import { renderNote } from "../render/renderFunc/renderNote.js";
import { findOneNote } from "../data/notes.js";

export const archiveNote = (archiveId, note, tBody) => {
    const archiveBody = document.querySelector('.archives-table__body');
    const archiveNote = findOneNote(archiveId);

    archiveOneNote(archiveId);

    tBody.removeChild(note);
    archiveBody.innerHTML += renderNote(archiveNote);
    
}
