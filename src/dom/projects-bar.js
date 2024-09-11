export function projectsDOM(projectsList) {
    const projectsContainer = document.querySelector('#projects-container');
    const tasksHeading = document.querySelector('#tasks-heading');

    const allButton = document.createElement('button');
    allButton.innerText = 'All';
    allButton.addEventListener('click', ()=>{
        tasksHeading.innerText = "All Tasks";
    });
    projectsContainer.appendChild(allButton);

    Object.keys(projectsList).forEach(key=>{
        const project = document.createElement('button');
        project.innerText = projectsList[key];
        project.addEventListener('click', ()=>{
            tasksHeading.innerText = projectsList[key];
        });
        projectsContainer.appendChild(project);
    });
}