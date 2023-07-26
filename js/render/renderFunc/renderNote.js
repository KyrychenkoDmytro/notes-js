export const renderNote = (note) => {
        const { name, created, category, content, dates } = note;
    return (
        `<tr class="notes-table__body-row">
        <td>
            <div class="notes-table__body-name">
                ${name}
            </div>
        </td>
        <td>${created}</td>
        <td>${category}</td>
        <td>${content}</td>
        <td>${dates}</td>
        <td>
            <div class="notes-table__body-wrapper-icons">
                <div class="notes-table__body-icons-edit"><img src="./assets/icons/edit.svg" alt="edit">
                </div>
                <div class="notes-table__body-icons-archive"><img src="./assets/icons/archive.svg"
                        alt="archive"></div>
                <div class="notes-table__body-icons-delete"><img src="./assets/icons/delete.svg"
                        alt="delete"></div>
            </div>
        </td>
    </tr>`
    )
}