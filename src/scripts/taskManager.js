import Task from "./task";
let name = document.querySelector('#task-name').value;
let date = document.querySelector('#date').value;
let priority = document.querySelector('#priority').value;
let project = document.querySelector('#project').value;
let notes = document.querySelector('#notes').value;



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
    
}



export { addTask };
