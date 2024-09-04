import { currentProject } from "../index.js";

export function projectsDOM(projectsList) {
    const projectsContainer = document.querySelector('#projects-container');
    const tasksHeading = document.querySelector('#tasks-heading');

    const allButton = document.createElement('button');
    allButton.innerText = 'all';
    allButton.addEventListener('click', ()=>{
        currentProject[0] = "all";
        tasksHeading.innerText = "all tasks";
    });
    projectsContainer.appendChild(allButton);

    Object.keys(projectsList).forEach(key=>{
        const project = document.createElement('button');
        project.innerText = projectsList[key];
        project.addEventListener('click', ()=>{
            currentProject[0] = projectsList[key];
            tasksHeading.innerText = currentProject[0];
        });
        projectsContainer.appendChild(project);
    });
}