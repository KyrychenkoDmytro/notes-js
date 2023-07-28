import { deleteNote } from "./deleteNote.js";
import { archiveNote } from "./archiveNote.js";
import { editNote } from "./editNote.js";

export const addNoteButtonsListener = (tBody, notes) => {
    const allNotes = tBody.querySelectorAll('.createdNote');

    allNotes.forEach((note) => {
        const noteId = note.getAttribute('data-note-id');
        const editBtn = note.querySelector('#editNote');
        const archiveBtn = note.querySelector('#archiveNote');
        const deleteBtn = note.querySelector('#deleteNote');

        if (notes.length) {
            editBtn.addEventListener('click', function (e) {
                e.preventDefault();
                editNote(noteId, note, tBody);
            });
            deleteBtn.addEventListener('click', () => deleteNote(noteId));
            archiveBtn.addEventListener('click', () => archiveNote(noteId));

        }
    });
}

