let modalBox = document.querySelector('dialog');
let taskItem = document.querySelector('.task-item');


const openModal = () => {
    modalBox.open = true;
}

const closeModal = () => {
    modalBox.open = false;
}

const createEditingBox = () => {

    let editingBox = document.createElement('div');
    editingBox.classList.add('editing-box');

    //TOP SECTION
    let topSection = document.createElement('div');
    topSection.classList.add('top-section');

    let taskNameInput = document.createElement('input');
    taskNameInput.type = 'text';
    taskNameInput.placeholder = 'Task name (required)';
    taskNameInput.required = true;

    let notesInput = document.createElement('textarea');
    notesInput.name = 'notes';
    notesInput.id = 'notes';
    notesInput.placeholder = 'Notes (Optional)';

    //BOTTOM SECTION
    let bottomSection = document.createElement('div');
    bottomSection.classList.add('bottom-section');

    let dateInput = document.createElement('input');
    dateInput.type = 'date';

    let priorityInput = document.createElement('select');
    priorityInput.name = 'priority';
    priorityInput.id = 'priority-input';
    priorityInput.required = true;

    let lowValue = document.createElement('option');
    lowValue.value = 'low';
    lowValue.innerText = 'Low';
    let mediumValue = document.createElement('option');
    mediumValue.value = 'medium';
    mediumValue.innerText = 'Medium';
    let highValue = document.createElement('option');
    highValue.value = 'high'
    highValue.innerText = 'High';

    let projectInput = document.createElement('select');
    projectInput.name = 'project';
    projectInput.id = 'project-input';

    let boxButtons = document.createElement('div');
    boxButtons.classList.add('box-buttons');
    let cancelButton = document.createElement('button');
    let saveButton = document.createElement('button');
    cancelButton.innerText = 'Cancel';
    saveButton.innerText = 'Save';

    //APPENDING TO EDITING BOX
    boxButtons.append(cancelButton, saveButton);
    bottomSection.append(dateInput, priorityInput, projectInput, boxButtons);
    priorityInput.append(lowValue, mediumValue, highValue);
    topSection.append(taskNameInput, notesInput);
    editingBox.append(topSection, bottomSection);
    taskItem.appendChild(editingBox);
}



export { openModal, closeModal, createEditingBox };
