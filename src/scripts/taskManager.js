import Task from "./task";
let form = document.querySelector('form');



const getId = () => {
    if(!localStorage.getItem("id")) {
        localStorage.setItem("id", 0);
    }

    return localStorage.getItem("id");
}

const incrementId = () => {
    let id = localStorage.getItem("id");
    id++;

    return localStorage.setItem("id", id);
}

const addTask = () => {
    let name = document.querySelector('#task-name').value;
    let date = document.querySelector('#date').value;
    let priority = document.querySelector('#priority').value;
    let project = document.querySelector('#project').value;
    let notes = document.querySelector('#notes').value;
    let index = parseInt(getId());

    if(form.checkValidity() === true) {
        let task = new Task(name, date, priority, project, notes, index);
        localStorage.setItem(`task-${index}`, JSON.stringify(task));
        incrementId();

        console.log(localStorage);
        console.log(getId());
        console.log(index);
    }
}

const updateTask = () => {
    let name = document.querySelector('#new-task-name').value;
    let date = document.querySelector('#new-date').value;
    let priority = document.querySelector('#new-priority').value;
    let project = document.querySelector('#new-project').value;
    let notes = document.querySelector('#new-notes').value;
    let editModal = document.querySelector('#edit-modal');

    if(editModal.checkValidity() === true) {
        let task = new Task(name, date, priority, project, notes);
        localStorage.setItem(`task-${getId()}`, JSON.stringify(task));

        console.log(localStorage);
        console.log(getId());
    }
    console.log(`${name}, ${date}, ${priority}, ${project}, ${notes}`);
    console.log(form.checkValidity());
}

const markComplete = () => {console.log('marking complete');}
const deleteTask = () => {console.log('deleting task');}



export { addTask, updateTask, deleteTask, markComplete };
