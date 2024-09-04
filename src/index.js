import "./styles/main-styles.css";
import projectsList from "./data/projects-list";
import { projectsDOM } from "./dom/projects-bar";
import todosArray from "./data/todos-array";
import Todo from "./modules/todo-class";
import newProject from "./modules/new-project";
import deleteProject from "./modules/delete-project";


// new Todo(projectsList.default, "Title", "Description", new Date(), 1);
// new Todo(newProject("dummy"), "Title2", "Description", new Date(), 1);


// let displayCards = todosArray;

// console.log(projectsList);
// deleteProject("dummy");
// console.log(displayCards);

// displayCards = todosArray.filter((todo)=> todo.title==='Title2');

// console.log(displayCards);
export let currentProject = [];
projectsDOM(projectsList);