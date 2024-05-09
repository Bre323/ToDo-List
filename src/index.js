import { openModal, createEditingBox, removeEditingBox } from "./scripts/boxManager";

let addTaskButton = document.querySelector('#add-task');
let taskMainDiv = document.querySelector('.task-content');


addTaskButton.addEventListener('click', openModal);
taskMainDiv.addEventListener('click', createEditingBox);
