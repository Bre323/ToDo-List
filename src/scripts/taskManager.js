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

const addTask = (name, date, priority, project, notes) => {
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

const updateTask = (name, date, priority, project, notes, index) => {
    let editModal = document.querySelector('#edit-modal');

    if(editModal.checkValidity() === true) {
        let task = new Task(name, date, priority, project, notes, index);
        localStorage.setItem(`task-${task.index}`, JSON.stringify(task));

        console.log(localStorage);
        console.log(getId());
    }
    console.log(`${name}, ${date}, ${priority}, ${project}, ${notes}, ${index}`);
}


/*
const markComplete = () => {console.log('marking complete');}

const deleteTask = (taskIndex) => {
    localStorage.removeItem(`task-${taskIndex}`);
}
*/



export { addTask, updateTask, deleteTask, markComplete };
