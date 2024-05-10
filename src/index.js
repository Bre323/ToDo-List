import { closeModal, openModal } from "./scripts/dom";
import { addTask } from "./scripts/taskManager";


let addTaskButton = document.querySelector('#add-task');
let cancelButton = document.querySelector('#cancel-button');
let saveButton = document.querySelector('#save-button');
let form = document.querySelector('form');


addTaskButton.addEventListener('click', openModal);
cancelButton.addEventListener('click', closeModal);
saveButton.addEventListener('click', addTask);
form.addEventListener('submit', event => event.preventDefault());
