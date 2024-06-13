class Project {
    constructor(name, index) {
        this.name = name;
        this.index = index;
    }
}


const getProjectId = () => {
    if(!localStorage.getItem("projectId")) {
        localStorage.setItem("projectId", 0);
    }

    return localStorage.getItem("projectId");
}

const incrementProjectId = () => {
    let projectId = localStorage.getItem("projectId");
    projectId++;

    return localStorage.setItem("projectId", projectId);
}

const getProjects = () => {
    const projects = [];

    for(let i = 0; i < getProjectId(); i++) {
        localStorage.getItem(`project-${i}`) ? 
            projects.push(JSON.parse(localStorage.getItem(`project-${i}`))) : null;
    }

    return projects;
}

const addProject = (name) => {
    let index = parseInt(getProjectId());
    let form = document.querySelector('form#edit-modal');

    console.log(form);
    console.log(form.checkValidity());
    if(form.checkValidity() === true) {
        let project = new Project(name, index);
        localStorage.setItem(`project-${index}`, JSON.stringify(project));
        incrementProjectId();
    }
}

const deleteProject = (projectIndex) => {
    localStorage.removeItem(`project-${projectIndex}`);
}


export { getProjects, addProject, deleteProject }
