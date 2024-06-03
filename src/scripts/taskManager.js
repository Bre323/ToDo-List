import { compareAsc, format } from "date-fns";
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

const markComplete = (event) => {
    let listItem = event.target.parentNode.parentNode;  //<li class="list-item"></li>
    let itemTitle = listItem.children[0].children[0];   //<p>Title</p>
    listItem.style.backgroundColor = '#999999';
    itemTitle.style.textDecorationLine = 'line-through';
}

const deleteTask = (taskIndex) => {
    //localStorage.removeItem(`task-${taskIndex}`);
}

const getTasks = () => {
    const tasks = [];

    for(let i = 0; i < getId(); i++) {
        localStorage.getItem(`task-${i}`) ? 
            tasks.push(JSON.parse(localStorage.getItem(`task-${i}`))) : null;
    }

    return tasks;
}



export { addTask, updateTask, deleteTask, markComplete, getTasks };
