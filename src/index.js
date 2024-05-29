import { closeModal, openModal, renderTasks, renderEditModal, removeEditModal } from "./scripts/dom";
import { addTask, updateTask, deleteTask, markComplete } from "./scripts/taskManager";
let addTaskButton = document.querySelector('#add-task');
let cancelButton = document.querySelector('#cancel-button');
let saveButton = document.querySelector('#save-button');
let form = document.querySelector('form');


const addEventsToEditModal = (index) => {
    let cancelEdit = document.querySelector('#cancel-edit');
    let saveEdit = document.querySelector('#save-edit');
    let editModal = document.querySelector('#edit-modal');
    console.log(cancelEdit);
    console.log(saveEdit);
    console.log(editModal);

    editModal.addEventListener('submit', event => event.preventDefault());
    cancelEdit.addEventListener('click', removeEditModal);
    saveEdit.addEventListener('click', () => {
        updateTask(index);
        removeEditModal();
        renderTasks();
    });
}

const addEventToCompleteButtons = () => {
    let completeSetting = document.querySelectorAll('.complete-setting');
    console.log(completeSetting);

    for(let i = 0; i < completeSetting.length; i++) {
        completeSetting[i].addEventListener('click', markComplete);
    }
}

const addEventToEditButtons = () => {
    let editSetting = document.querySelectorAll('.edit-setting');
    console.log(editSetting);

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
    console.log(deleteSetting);

    for(let i = 0; i < deleteSetting.length; i++) {
        deleteSetting[i].addEventListener('click', event => {
            let item = event.target.parentNode.parentNode;

            console.log(item);
            console.log(item.dataset.index);
            deleteTask(item.dataset.index);
            renderTasks();
        });
    }
}

const initializePage = () => {
    renderTasks();
    addEventToCompleteButtons();
    addEventToEditButtons();
    addEventToDeleteButtons();
    console.log(localStorage);
}


form.addEventListener('submit', event => event.preventDefault());
addTaskButton.addEventListener('click', openModal);
cancelButton.addEventListener('click', closeModal);
saveButton.addEventListener('click', () => {
    addTask();
    closeModal();
    renderTasks();
});


initializePage();
