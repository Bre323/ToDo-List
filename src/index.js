import { closeModal, openModal, renderTasks } from "./scripts/dom";
import { addTask } from "./scripts/taskManager";

let addTaskButton = document.querySelector('#add-task');
let cancelButton = document.querySelector('#cancel-button');
let saveButton = document.querySelector('#save-button');
let form = document.querySelector('form');

form.addEventListener('submit', event => event.preventDefault());
addTaskButton.addEventListener('click', openModal);
cancelButton.addEventListener('click', closeModal);
saveButton.addEventListener('click', addTask);

const initializePage = () => {
    renderTasks();
    console.log(localStorage);
}

initializePage();
