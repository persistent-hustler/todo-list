import todosArray from "../data/todos-array";

export default class {
    constructor(project, title, description, dueDate, priority) {
        this.project = project;
        this.title = title;
        this.description = description;
        this.dueDate = `${dueDate.getDate()}-${dueDate.getMonth()+1}-${dueDate.getFullYear()}`;
        this.priority = priority;

        this.id = Date.now().toString(36) + Math.random().toString(36).substring(2, 12).padStart(12, 0);
        this.completed = false;
        todosArray.push(this);
    }

    complete() {
        this.completed = true;
    }

    delete() {
        const index = todosArray.indexOf(this);
        if (index > -1) {
            todosArray.splice(index, 1);
        }
    }
}