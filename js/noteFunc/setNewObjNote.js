import { images } from "../data/images.js";

export const setNewObjNote = (form, noteId) => ({
    id: noteId,
    imgUrl: images.filter((img) => img.imgName === form.elements[2].value)[0]?.imgUrl || '',
    name: form.elements[0].value,
    created: form.elements[1].value,
    category: form.elements[2].value,
    content: form.elements[3].value,
    dates: '',
    archived: false,
  });