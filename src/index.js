import "./styles/main-styles.css";
import projectsList from "./data/projects-list";
import { projectsDOM } from "./dom/projects-bar";
import todosArray from "./data/todos-array";
import Todo from "./modules/todo-class";
import showCard from "./dom/show-card";


// let displayCards = todosArray;

// console.log(projectsList);
// deleteProject("dummy");
// console.log(displayCards);

// displayCards = todosArray.filter((todo)=> todo.title==='Title2');

// console.log(displayCards);
projectsDOM(projectsList);

const addNoteDialog = document.createElement('dialog');

addNoteDialog.innerHTML = `
<form method="dialog">
    <div>
        <label for='new-title'> Title:
            <input id='new-title' type='text' required>
        </label>
    </div>
    <div>
        <label for="new-project"> Project:
            <select name="project" id="new-project">
                <option value="${projectsList.default}">Default</option>
                <option value="${projectsList.project1}">Project1</option>
                <option value="${projectsList.project2}">Project2</option>
                <option value="${projectsList.project3}">Project3</option>
            </select>
        </label>
    </div>
    <div>
        <label for='new-description'> Description:
            <textarea id='new-description'></textarea>
        </label>
    </div>
    <div>
        <label for='new-due-date'> DueDate:
            <input id='new-due-date' type='date'>
        </label>
    </div>
    <div>
        <label for='new-priority'> Priority:
            <input id='new-priority' type='text'>
        </label>
    </div>
        
    <div>
        <button id='close-dialog' type='cancel'>Close</button>
        <button id='save-new-note' type='submit'>Save</button>
    </div>
</form>`;
document.getElementById('display-container').appendChild(addNoteDialog);

const addNoteBtn = document.querySelector('#new-note');

addNoteBtn.addEventListener('click', ()=>{
    addNoteDialog.showModal();
});

const tasksHeading = document.querySelector('#tasks-heading');
const cardsContainer = document.querySelector('#cards-container');

const saveNote = document.getElementById('save-new-note');
saveNote.addEventListener('click', ()=>{
    const project = document.getElementById('new-project').value;
    const title = document.getElementById('new-title').value;
    const description = document.getElementById('new-description').value;
    let dueDate = document.getElementById('new-due-date').value;
    if(!dueDate) {
        dueDate = new Date();
    }
    const priority = document.getElementById('new-priority').value;
    const todo = new Todo(project, title, description, dueDate, priority);
    if(title) {
        tasksHeading.innerText = "All Tasks";
        cardsContainer.innerHTML = '';
        todosArray.forEach(todo=>{showCard(todo)});
    }
});