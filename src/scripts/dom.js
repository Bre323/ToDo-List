let modalBox = document.querySelector('dialog');
let taskList = document.querySelector('.task-list');



const openModal = () => {
    modalBox.open = true;
}

const closeModal = () => {
    modalBox.open = false;
}


const renderEditingBox = () => {

    let taskItem = document.querySelector('.task-item');
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


const renderListItem = (name, date, priority, project, notes) => {
    let taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    let content = document.createElement('div');
    content.classList.add('task-content');

    let nameText = document.createElement('p');
    nameText.innerText = `${name}`;
    let notesText = document.createElement('p');
    notesText.innerText = `${notes}`

    let taskInfo = document.createElement('div');
    taskInfo.classList.add('task-info');

    let dateDiv = document.createElement('div');
    dateDiv.classList.add('task-div');
    let projectDiv = document.createElement('div');
    projectDiv.classList.add('task-div');

    let dateImage = document.createElement('img');
    dateImage.src = './assets/day-icon.svg';
    let dateText = document.createElement('p');
    dateText.innerText = `${date}`;

    let projectImage = document.createElement('img');
    projectImage.src = './assets/folder-icon.svg';
    let projectText = document.createElement('p');
    projectText.innerText = `${project}`;

    let priorityText = document.createElement('p');
    priorityText.innerText = `${priority}`;


    dateDiv.append(dateImage, dateText);
    projectDiv.append(projectImage, projectText);
    taskInfo.append(dateDiv, projectDiv);
    content.append(nameText, notesText, taskInfo, priorityText);
    taskItem.appendChild(content);

    console.log(taskItem);
}



export { openModal, closeModal, renderEditingBox, renderListItem };
