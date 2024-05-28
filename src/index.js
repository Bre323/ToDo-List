import { closeModal, openModal, renderTasks, renderEditModal } from "./scripts/dom";
import { addTask, deleteTask, markComplete } from "./scripts/taskManager";
let addTaskButton = document.querySelector('#add-task');
let cancelButton = document.querySelector('#cancel-button');
let saveButton = document.querySelector('#save-button');
let form = document.querySelector('form');


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
        editSetting[i].addEventListener('click', renderEditModal);
    }    
}

const addEventToDeleteButtons = () => {
    let deleteSetting = document.querySelectorAll('.delete-setting');
    console.log(deleteSetting);

    for(let i = 0; i < deleteSetting.length; i++) {
        deleteSetting[i].addEventListener('click', deleteTask);
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
