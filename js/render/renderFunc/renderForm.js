export const renderForm = () => {
    return (
        `<tr class="notes-table__body-row notes-form">
        <td class="notes-table__body-form" colspan="6">
            <form id="noteForm">
                <input class="notes-table__body-form-name" type="text" value="" placeholder="Name"
                    required>
                <input class="notes-table__body-form-date" type="date" required>
                <select class="notes-table__body-form-category" name="category">
                    <option value="Task">Task</option>
                    <option value="Random Thought">Random Thought</option>
                    <option value="Idea">Idea</option>
                </select>
                <textarea class="notes-table__body-form-text" name="Content" maxlength="100" cols="30"
                    rows="2" placeholder="Content" required></textarea>
                <button class="notes-table__body-form-submit" id="submitNote" type="submit">Add Note</button>
                <button class="notes-table__body-form-close">x</button>
            </form>
        </td>
    </tr>`
    )
}