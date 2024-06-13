import { 
    closeModal, 
    openModal, 
    renderTasks, 
    renderProjects, 
    renderEditModal, 
    renderAddProjectModal, 
    removeModal, 
    addProjectOptions
} from "./scripts/dom";

import { 
    addTask, 
    updateTask, 
    deleteTask, 
    markComplete, 
    getTasks, 
    getTasksToday, 
    getTasksWeek, 
    getTasksMonth, 
    getTasksByProject 
} from "./scripts/taskManager";

import { 
    addProject, 
    deleteProject, 
    getProjects 
} from "./scripts/projectManager";

let addTaskButton = document.querySelector('#add-task');
let allTasksButton = document.querySelector('#all-tasks');
let todayTasksButton = document.querySelector('#today-tasks');
let weekTasksButton = document.querySelector('#week-tasks');
let monthTasksButton = document.querySelector('#month-tasks');
let addProjectButton = document.querySelector('#add-project');
let cancelButton = document.querySelector('#cancel-button');
let saveButton = document.querySelector('#save-button');
let form = document.querySelector('form');
let titleText = document.querySelector('.title > h2');
let taskArray = [];
let projectArray = [];


const setVisibleTasks = (taskItems, titleString) => {
    taskArray = taskItems;
    titleText.innerHTML = titleString;
}

const initializePage = () => {
    setVisibleTasks(getTasks(), 'All Tasks');
    renderTasks(taskArray);
    addEventToCompleteButtons();
    addEventToEditButtons();
    addEventToDeleteButtons();
}

const addEventsToProjectModal = () => {
    let editModal = document.querySelector('#edit-modal');
    let cancelProjectButton = document.querySelector('#cancel-project');
    let saveProjectButton = document.querySelector('#save-project');

    editModal.addEventListener('submit', event => event.preventDefault());
    cancelProjectButton.addEventListener('click', removeModal);
    saveProjectButton.addEventListener('click', () => {
        let projectName = document.querySelector('#project-name').value;

        console.log(projectName);
        addProject(projectName);
        projectArray = getProjects();

        removeModal();
        renderProjects(projectArray);
        addEventsToProjectItems();
    });
}

const addEventsToEditModal = (index) => {
    let cancelEdit = document.querySelector('#cancel-edit');
    let saveEdit = document.querySelector('#save-edit');
    let editModal = document.querySelector('#edit-modal');

    editModal.addEventListener('submit', event => event.preventDefault());
    cancelEdit.addEventListener('click', removeModal);
    saveEdit.addEventListener('click', () => {
        let name = document.querySelector('#new-task-name').value;
        let date = document.querySelector('#new-date').value;
        let priority = document.querySelector('#new-priority').value;
        let project = document.querySelector('#new-project').value;
        let notes = document.querySelector('#new-notes').value;

        updateTask(name, date, priority, project, notes, index);
        removeModal();
        setVisibleTasks(getTasks(), 'All Tasks');
        renderTasks(taskArray);
        addEventToCompleteButtons();
        addEventToEditButtons();
        addEventToDeleteButtons();
    });
}

const addEventToCompleteButtons = () => {
    let completeSetting = document.querySelectorAll('.complete-setting');

    for(let i = 0; i < completeSetting.length; i++) {
        completeSetting[i].addEventListener('click', event => {
            markComplete(event);
        });
    }
}

const addEventToEditButtons = () => {
    let editSetting = document.querySelectorAll('.edit-setting');

    for(let i = 0; i < editSetting.length; i++) {
        editSetting[i].addEventListener('click', event => {
            let item = event.target.parentNode.parentNode;

            renderEditModal();
            addEventsToEditModal(item.dataset.index);
        });
    }    
}

const addEventToDeleteButtons = () => {
    let deleteSetting = document.querySelectorAll('.delete-setting');

    for(let i = 0; i < deleteSetting.length; i++) {
        deleteSetting[i].addEventListener('click', event => {
            let item = event.target.parentNode.parentNode;

            deleteTask(item.dataset.index);
            setVisibleTasks(getTasks(), 'All Tasks');
            renderTasks(taskArray);
            addEventToCompleteButtons();
            addEventToEditButtons();
            addEventToDeleteButtons();
        });
    }
}

const addEventsToProjectItems = () => {
    let projectItem = document.querySelectorAll('.project-item');
    let projectTitle = document.querySelectorAll('.project-title');
    let deleteProjectButton = document.querySelectorAll('.delete-folder');

    for(let i = 0; i < projectItem.length; i++) {
        projectTitle[i].addEventListener('click', event => {
            let item = event.target.parentNode.parentNode;
            let projectTitle = event.target.innerText;
            setVisibleTasks(getTasksByProject(item.id), projectTitle);
            renderTasks(taskArray);
            addEventToCompleteButtons();
            addEventToEditButtons();
            addEventToDeleteButtons();
        });

        deleteProjectButton[i].addEventListener('click', event => {
            let item = event.target.parentNode;
            console.log(item);
            deleteProject(item.id);
            projectArray = getProjects();

            renderProjects(projectArray);
            addEventsToProjectItems();
        });
    }
}



form.addEventListener('submit', event => event.preventDefault());
addTaskButton.addEventListener('click', openModal);

allTasksButton.addEventListener('click', () => {
    setVisibleTasks(getTasks(), 'All Tasks');
    renderTasks(taskArray);
    addEventToCompleteButtons();
    addEventToEditButtons();
    addEventToDeleteButtons();
});

todayTasksButton.addEventListener('click', () => {
    setVisibleTasks(getTasksToday(), 'Today Tasks');
    renderTasks(taskArray);
    addEventToCompleteButtons();
    addEventToEditButtons();
    addEventToDeleteButtons();
});

weekTasksButton.addEventListener('click', () => {
    setVisibleTasks(getTasksWeek(), 'Week Tasks');
    renderTasks(taskArray);
    addEventToCompleteButtons();
    addEventToEditButtons();
    addEventToDeleteButtons();
});

monthTasksButton.addEventListener('click', () => {
    setVisibleTasks(getTasksMonth(), 'Month Tasks');
    renderTasks(taskArray);
    addEventToCompleteButtons();
    addEventToEditButtons();
    addEventToDeleteButtons();
});

addProjectButton.addEventListener('click', () => {
    renderAddProjectModal();
    addEventsToProjectModal();
});

cancelButton.addEventListener('click', closeModal);
saveButton.addEventListener('click', () => {
    let name = document.querySelector('#task-name').value;
    let date = document.querySelector('#date').value;
    let priority = document.querySelector('#priority').value;
    let project = document.querySelector('#project').value;
    let notes = document.querySelector('#notes').value;

    addTask(name, date, priority, project, notes);
    closeModal();
    setVisibleTasks(getTasks(), 'All Tasks');
    renderTasks(taskArray);
    addEventToCompleteButtons();
    addEventToEditButtons();
    addEventToDeleteButtons();
});


renderProjects(getProjects());
addEventsToProjectItems();
initializePage();
