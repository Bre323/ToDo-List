import { closeModal, openModal, renderTasks, renderEditModal, removeEditModal } from "./scripts/dom";
import { addTask, updateTask, deleteTask, markComplete, getTasks } from "./scripts/taskManager";
let addTaskButton = document.querySelector('#add-task');
let cancelButton = document.querySelector('#cancel-button');
let saveButton = document.querySelector('#save-button');
let form = document.querySelector('form');


const initializePage = () => {
    renderTasks();
    addEventToCompleteButtons();
    addEventToEditButtons();
    addEventToDeleteButtons();
}


const addEventsToEditModal = (index) => {
    let cancelEdit = document.querySelector('#cancel-edit');
    let saveEdit = document.querySelector('#save-edit');
    let editModal = document.querySelector('#edit-modal');

    editModal.addEventListener('submit', event => event.preventDefault());
    cancelEdit.addEventListener('click', removeEditModal);
    saveEdit.addEventListener('click', () => {
        let name = document.querySelector('#new-task-name').value;
        let date = document.querySelector('#new-date').value;
        let priority = document.querySelector('#new-priority').value;
        let project = document.querySelector('#new-project').value;
        let notes = document.querySelector('#new-notes').value;

        updateTask(name, date, priority, project, notes, index);
        removeEditModal();
        initializePage();
    });
}

const addEventToCompleteButtons = () => {
    let completeSetting = document.querySelectorAll('.complete-setting');

    for(let i = 0; i < completeSetting.length; i++) {
        completeSetting[i].addEventListener('click', markComplete);
    }
}

const addEventToEditButtons = () => {
    let editSetting = document.querySelectorAll('.edit-setting');

    for(let i = 0; i < editSetting.length; i++) {
        editSetting[i].addEventListener('click', event => {
            let item = event.target.parentNode.parentNode;

            console.log(item);
            console.log(item.dataset.index);
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

            console.log(item);
            console.log(item.dataset.index);
            deleteTask(item.dataset.index);
            initializePage();
        });
    }
}



form.addEventListener('submit', event => event.preventDefault());
addTaskButton.addEventListener('click', openModal);
cancelButton.addEventListener('click', closeModal);
saveButton.addEventListener('click', () => {
    let name = document.querySelector('#task-name').value;
    let date = document.querySelector('#date').value;
    let priority = document.querySelector('#priority').value;
    let project = document.querySelector('#project').value;
    let notes = document.querySelector('#notes').value;

    addTask(name, date, priority, project, notes);
    closeModal();
    initializePage();
});


console.log(getTasks());
initializePage();
