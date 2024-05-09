import { closeModal, createEditingBox } from "./boxManager";
import task from "./task";

const addTask = () => {
    let name = document.querySelector('#task-name').value;
    let date = document.querySelector('#date').value;
    let priority = document.querySelector('#priority').value;
    let project = document.querySelector('#project').value;
    let notes = document.querySelector('#notes').value;
    let taskObject = new task(name, date, priority, project, notes);
}

export { addTask };
