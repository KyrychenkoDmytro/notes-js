// import renderSummary from '../render/renderSummary.js';
import { removeOneNote } from '../data/notes.js';

export const deleteNote = (deleteId, note, tBody) => {
    removeOneNote(deleteId);
    tBody.removeChild(note);
}
