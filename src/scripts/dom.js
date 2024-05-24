let modalBox = document.querySelector('dialog');
let taskList = document.querySelector('.task-list');



const openModal = () => {
    modalBox.open = true;
}

const closeModal = () => {
    modalBox.open = false;
}

const renderListItem = (name, date, priority, project, notes) => {
    taskList.insertAdjacentHTML('beforeend', `
    <li class="task-item">
        <div class="task-content">
            <p>${name}</p>
            <p>${notes}</p>

            <div class="task-info">
                <div class="task-div">
                    <img src="./assets/day-icon.svg">
                    <p>${date}</p>
                </div>

                <div class="task-div">
                    <img src="./assets/folder-icon.svg">
                    <p>${project}</p>
                </div>

                <p>${priority} priority</p>
            </div>
        </div>

        <div class="task-settings">
            <button>Complete</button>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </li>
    `);
}

const renderTasks = () => {
    for(let i = 1; i < localStorage.length; i++) {
        let task = JSON.parse(localStorage[`task-${i - 1}`]);

        renderListItem(
            task.name,
            task.date,
            task.priority,
            task.project,
            task.notes,
        );
    }
}



export { openModal, closeModal, renderTasks };
