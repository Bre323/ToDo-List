import { closeModal, openModal } from "./scripts/boxManager";
import { addTask } from "./scripts/taskManager";

let addTaskButton = document.querySelector('#add-task');
let cancelButton = document.querySelector('#cancel-button');
let saveButton = document.querySelector('#save-button');

addTaskButton.addEventListener('click', openModal);
cancelButton.addEventListener('click', closeModal);
saveButton.addEventListener('mouseover', addTask);
