let modalBox = document.querySelector('dialog');
let taskList = document.querySelector('.task-list');
let projectList = document.querySelector('.project-list');
import dayIcon from '../assets/day-icon.svg';
import folderIcon from '../assets/folder-icon.svg';
import deleteIcon from '../assets/delete-icon.svg';


const openModal = () => {
    modalBox.open = true;
}

const closeModal = () => {
    modalBox.open = false;
}

const renderEditModal = (name, date, priority, project, notes) => {
    document.body.insertAdjacentHTML('beforeend', `
    <div id="overlay">
        <form id="edit-modal">
            <h2>Edit Task</h2>

            <input type="text" name="new-task-name" id="new-task-name" placeholder="Task name (required)" required>
            <input type="date" name="new-date" id="new-date" required>

            <div class="modal-mid-section">
                <select name="new-priority" id="new-priority" required>
                    <option id="new-priority-low" value="low">Low</option>
                    <option id="new-priority-medium" value="medium">Medium</option>
                    <option id="new-priority-high" value="high">High</option>
                </select>

                <select name="new-project" id="new-project">
                    <option value="no project">None</option>
                </select>
            </div>

            <textarea name="new-notes" id="new-notes" placeholder="Notes (Optional)"></textarea>

            <div class="edit-buttons">
                <button id="cancel-edit" formnovalidate>Cancel</button>
                <button id="save-edit">Save</button>
            </div>
        </form>
    </div>
    `);
}

const addValuesToEditModal = (name, date, priority, project, notes) => {
    let nameInput = document.querySelector('#new-task-name');
    let dateInput = document.querySelector('#new-date');
    let priorityOption = document.querySelector(`#new-priority-${priority}`);
    let projectOption = document.querySelector(`#new-project > option[value="${project.toLowerCase()}"]`);
    let notesInput = document.querySelector('#new-notes');

    nameInput.value = name;
    dateInput.value = date;
    notesInput.innerText = notes;
    priorityOption.selected = true;
    projectOption.selected = true;
};

const addProjectOptionsToEditModal = (projectArray) => {
    let projectSelect = document.querySelector('#new-project');
    projectSelect.innerHTML = `<option value="no project">None</option>`;

    for(let i = 0; i < projectArray.length; i++) {
        let projectName = projectArray[i].name;
        projectSelect.innerHTML += `<option value="${projectName.toLowerCase()}">${projectName}</option>`;
    }
}

const renderAddProjectModal = () => {
    document.body.insertAdjacentHTML('beforeend', `
    <div id="overlay">
        <form id="edit-modal">
            <h2>Add Project</h2>

            <input type="text" name="project-name" id="project-name" placeholder="Project name (required)" required>

            <div class="edit-buttons">
                <button id="cancel-project" formnovalidate>Cancel</button>
                <button id="save-project">Save</button>
            </div>
        </form>
    </div>
`);
}

const removeModal = () => {
    let overlay = document.querySelector('#overlay');
    document.body.removeChild(overlay);
}

const renderListItem = (name, date, priority, project, notes, index) => {
    taskList.insertAdjacentHTML('beforeend', `
    <li class="task-item" data-index="${index}">
        <div class="task-content">
            <p>${name}</p>
            <p>${notes}</p>

            <div class="task-info">
                <div class="task-div">
                    <img src="${dayIcon}">
                    <p>${date}</p>
                </div>

                <div class="task-div">
                    <img src="${folderIcon}">
                    <p>${project}</p>
                </div>

                <p>${priority} priority</p>
            </div>
        </div>

        <div class="task-settings">
            <button class="complete-setting">Complete</button>
            <button class="edit-setting">Edit</button>
            <button class="delete-setting">Delete</button>
        </div>
    </li>
    `);
}

const renderProjectItem = (name, projectKey) => {
    projectList.insertAdjacentHTML('beforeend', `
    <div class="project-item" id="${projectKey}">
        <div class="project-title">
            <img src="${folderIcon}">
            <p>${name}</p>
        </div>

        <img class="delete-folder" src="${deleteIcon}" alt="delete icon">
    </div>    
    `);
}

const renderTasks = (taskArray) => {
    taskList.innerHTML = '';

    for(let i = 0; i < taskArray.length; i++) {
        let task = taskArray[i];

        renderListItem(
            task.name,
            task.date,
            task.priority,
            task.project,
            task.notes,
            task.index
        );
    }
}

const renderProjects = (projectArray) => {
    projectList.innerHTML = '';

    for(let i = 0; i < projectArray.length; i++) {
        let project = projectArray[i];

        renderProjectItem(
            project.name,
            project.index
        );
    }
}

const addProjectOptions = (projectArray) => {
    let projectSelect = document.querySelector('#project');
    projectSelect.innerHTML = `<option value="no project">None</option>`;

    for(let i = 0; i < projectArray.length; i++) {
        let projectName = projectArray[i].name;
        projectSelect.innerHTML += `<option value="${projectName}">${projectName}</option>`;
    }
}


export { 
    openModal, 
    closeModal, 
    renderTasks, 
    renderProjects, 
    addProjectOptions, 
    renderEditModal,
    addValuesToEditModal,
    addProjectOptionsToEditModal, 
    renderAddProjectModal, 
    removeModal 
};
