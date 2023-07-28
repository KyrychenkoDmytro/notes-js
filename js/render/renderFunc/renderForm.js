const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
};

export const renderForm = (note) => {
 
    return (
        note
            ? `<tr class="notes-table__body-row notes-form">
              <td class="notes-table__body-form" colspan="6">
                  <form id="noteForm">
                      <input class="notes-table__body-form-name" type="text" value="${note?.name}" placeholder="Name" required>
                      <input class="notes-table__body-form-date" type="date" value="${formatDate(note?.created)}" required>
                      <select class="notes-table__body-form-category" name="category">
                          <option value="Task" ${note?.category === "Task" ? "selected" : ""}>Task</option>
                          <option value="Random Thought" ${note?.category === "Random Thought" ? "selected" : ""}>Random Thought</option>
                          <option value="Idea" ${note?.category === "Idea" ? "selected" : ""}>Idea</option>
                      </select>
                      <textarea class="notes-table__body-form-text" name="Content" maxlength="100" cols="30" rows="2" placeholder="Content" required>${note?.content}</textarea>
                      <button class="notes-table__body-form-submit" id="submitNote" type="submit">Add Note</button>
                      <button class="notes-table__body-form-close" id="closeForm">x</button>
                  </form>
              </td>
          </tr>`
            : `<tr class="notes-table__body-row notes-form">
              <td class="notes-table__body-form" colspan="6">
                  <form id="noteForm">
                      <input class="notes-table__body-form-name" type="text" value="" placeholder="Name" required>
                      <input class="notes-table__body-form-date" type="date" required>
                      <select class="notes-table__body-form-category" name="category">
                          <option value="Task">Task</option>
                          <option value="Random Thought">Random Thought</option>
                          <option value="Idea">Idea</option>
                      </select>
                      <textarea class="notes-table__body-form-text" name="Content" maxlength="100" cols="30" rows="2" placeholder="Content" required></textarea>
                      <button class="notes-table__body-form-submit" id="submitNote" type="submit">Add Note</button>
                      <button class="notes-table__body-form-close" id="closeForm">x</button>
                  </form>
              </td>
          </tr>`
    );
};
