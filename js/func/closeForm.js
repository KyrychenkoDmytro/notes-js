export const closeForm = () => {
    console.log('atata');
    const tableBody = document.querySelector('.notes-table__body');
    const trForm = document.querySelector('.notes-form');
    const form = document.querySelector('.notes-form form');
    console.log(form);
    if(form) {
        const requiredFields = form.querySelectorAll('[required]');
        console.log(requiredFields);
        requiredFields.forEach(field => {
            field.removeAttribute('required');
        });

        tableBody.removeChild(trForm);
    }
}