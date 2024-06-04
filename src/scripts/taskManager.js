import { compareAsc, format, isSameWeek, isThisMonth, isThisWeek } from "date-fns";
import Task from "./task";
import { isSameMonth } from "date-fns/isSameMonth";
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

const addTask = (name, date, priority, project, notes, complete = false) => {
    let index = parseInt(getId());

    if(form.checkValidity() === true) {
        let task = new Task(name, date, priority, project, notes, complete, index);
        localStorage.setItem(`task-${index}`, JSON.stringify(task));
        incrementId();
    }
}

const updateTask = (name, date, priority, project, notes, index) => {
    let editModal = document.querySelector('#edit-modal');
    let complete = false;

    if(editModal.checkValidity() === true) {
        let task = new Task(name, date, priority, project, notes, complete, index);
        localStorage.setItem(`task-${task.index}`, JSON.stringify(task));
    }
}

const markComplete = (event) => {
    let completeButton = event.target;  //<button class="complete-setting">Complete</button>
    let listItem = event.target.parentNode.parentNode;  //<li class="list-item" data-index="##"></li>
    let itemTitle = listItem.children[0].children[0];   //<p>Title</p>
    let index = listItem.dataset.index;
    let storageItem = JSON.parse(localStorage.getItem(`task-${index}`));
    storageItem.complete = true;

    if(storageItem.complete) {
        completeButton.innerText = 'Unmark';
        completeButton.style.backgroundColor = '#999999';
        listItem.style.backgroundColor = '#999999';
        itemTitle.style.textDecorationLine = 'line-through';
    }
}

const deleteTask = (taskIndex) => {
    localStorage.removeItem(`task-${taskIndex}`);
}

const getTasks = () => {
    const tasks = [];

    for(let i = 0; i < getId(); i++) {
        localStorage.getItem(`task-${i}`) ? 
            tasks.push(JSON.parse(localStorage.getItem(`task-${i}`))) : null;
    }

    return tasks;
}

const getTasksToday = () => {
    const today = format(new Date(), 'yyyy-MM-dd');
    let tasks = getTasks();

    tasks = tasks.filter(task => task.date == today);

    return tasks;
}

const getTasksWeek = () => {
    let tasks = getTasks();
    tasks = tasks.filter(task => isThisWeek(task.date));
    return tasks;
}

const getTasksMonth = () => {
    let tasks = getTasks();
    tasks = tasks.filter(task => isThisMonth(task.date));
    return tasks;
}



export { 
    addTask, 
    updateTask, 
    deleteTask, 
    markComplete, 
    getTasks, 
    getTasksToday, 
    getTasksWeek, 
    getTasksMonth 
};
