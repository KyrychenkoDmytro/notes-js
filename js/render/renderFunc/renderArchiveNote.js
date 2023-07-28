export const renderArchiveNote = (note) => {
    const { id, name, imgUrl, created, category, content, dates } = note;
    return (
        `<tr class="notes-table__body-row archiveNote" data-note-category="${category}">
        <td>
            <div class="notes-table__body-name">
                <div><img src="${imgUrl}" alt="${category}"></div>
                <span>${name}</span>
            </div>
        </td>
        <td>${created}</td>
        <td>${category}</td>
        <td>${content}</td>
        <td>${dates}</td>
        <td>
            <button class="unArchiveNote" data-unarchive-id="${id}">Unarchive</button>
        </td>
    </tr>`
    )
}