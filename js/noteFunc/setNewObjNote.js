import { images } from "../data/images.js";

const convertToFormattedDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: "long", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

const convertToCustomFormat = (newDate, existingDates = '') => {
  let date = new Date(newDate);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const formattedDate = `${month}/${day}/${year}`;

  if (existingDates) {
    date = new Date(existingDates);
    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();
    existingDates = `${month}/${day}/${year}`;

    return `${existingDates}, ${formattedDate}`;
  }

  return formattedDate;
};

export const setNewObjNote = (form, noteId, previousDate) => {

  const newDate = convertToFormattedDate(form.elements[1].value);

  return {
    id: noteId,
    imgUrl: images.filter((img) => img.imgName === form.elements[2].value)[0]?.imgUrl || '',
    name: form.elements[0].value,
    created: newDate,
    category: form.elements[2].value,
    content: form.elements[3].value,
    dates: previousDate ? `${convertToCustomFormat(newDate, previousDate)}` : '',
    archived: false,
  }
};