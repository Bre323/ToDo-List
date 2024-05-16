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

    if(form.checkValidity() === true) {
        let task = new Task(name, date, priority, project, notes);
        localStorage.setItem(`task-${getId()}`, JSON.stringify(task));
        incrementId();

        console.log(localStorage);
        console.log(getId());
    }
}

const updateTask = () => {
    let name = document.querySelector('#task-name-input').value;
    let date = document.querySelector('#date-input').value;
    let priority = document.querySelector('#priority-input').value;
    let project = document.querySelector('#project-input').value;
    let notes = document.querySelector('#notes-input').value;

    if(form.checkValidity() === true) {
        let task = new Task(name, date, priority, project, notes);
        localStorage.setItem(`task-${getId()}`, JSON.stringify(task));

        console.log(localStorage);
        console.log(getId());
    }
}
/**/

/*
const removeTask = key => {
    localStorage.removeItem(`task-${key}`);
}
*/



export { addTask, updateTask };
