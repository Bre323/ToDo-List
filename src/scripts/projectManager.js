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
    id++;

    return localStorage.setItem("projectId", projectId);
}

const getProjects = () => {
    console.log('getProjects function');
}

const addProject = () => {
    console.log('addProject function');
}

const removeProject = () => {
    console.log('removeProject function');
}


export { getProjects, addProject, removeProject }
