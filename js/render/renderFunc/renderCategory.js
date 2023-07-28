export const renderCategory = (obj, tableBody) => {

    let tableRows = '';
    Object.keys(obj).forEach(category => {
        const { total, archived, imgUrl } = obj[category];
        const active = total - archived;

        tableRows += `<tr class="archives-table__body-row show-notes" data-note-category="${category}">
        <td class="archives-table__td" colspan="2">
            <div class="notes-table__body-name archives-table__name">
            <div><img src="${imgUrl}" alt="${category}"></div>
                <span>${category}</span>
            </div>
        </td>
        <td class="archives-table__td" colspan="2">${active}</td>
        <td class="archives-table__td" colspan="2">${archived}</td>
      </tr>`;
    });

    return tableBody.innerHTML = tableRows;
}