import "./styles/main-styles.css";
import projectsList from "./data/projects-list";
import { projectsDOM } from "./dom/projects-bar";
import todosArray from "./data/todos-array";
import Todo from "./modules/todo-class";
import showCard from "./dom/show-card";


new Todo(projectsList.default, "Title", "Description", new Date(), 1);
new Todo(projectsList.project1, "Title1", "Description", new Date(), 1);
new Todo(projectsList.project2, "Title2", "Description", new Date(), 1);


// let displayCards = todosArray;

// console.log(projectsList);
// deleteProject("dummy");
// console.log(displayCards);

// displayCards = todosArray.filter((todo)=> todo.title==='Title2');

// console.log(displayCards);
projectsDOM(projectsList);
showCard(todosArray[0]);
showCard(todosArray[1]);
showCard(todosArray[2]);