import projectsList from "../data/projects-list";
import todosArray from "../data/todos-array";

export default function deleteProject(projectName) {
    delete projectsList[projectName];
    for (var i = todosArray.length - 1; i >= 0; i--) {
        if (todosArray[i].project === projectName) {
         todosArray.splice(i, 1);
        }
       }
}