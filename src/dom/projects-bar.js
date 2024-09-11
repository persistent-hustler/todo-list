import todosArray from "../data/todos-array";
import showCard from "./show-card";

export function projectsDOM(projectsList) {
    const projectsContainer = document.querySelector('#projects-container');
    const tasksHeading = document.querySelector('#tasks-heading');
    const cardsContainer = document.querySelector('#cards-container');

    const allButton = document.createElement('button');
    allButton.innerText = 'All';
    allButton.addEventListener('click', ()=>{
        tasksHeading.innerText = "All Tasks";
        cardsContainer.innerHTML = '';
        todosArray.forEach(todo=>{showCard(todo)});
    });
    projectsContainer.appendChild(allButton);

    Object.keys(projectsList).forEach(key=>{
        const project = document.createElement('button');
        project.innerText = projectsList[key];
        project.addEventListener('click', ()=>{
            tasksHeading.innerText = projectsList[key];
            cardsContainer.innerHTML = '';
            todosArray.filter(todo=>todo.project===projectsList[key]).forEach(todo=>{showCard(todo)});
        });
        projectsContainer.appendChild(project);
    });
}