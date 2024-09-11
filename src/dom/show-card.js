import todosArray from "../data/todos-array";

export default function showCard(todo) {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    const index = todo.id;

    card.innerHTML = `<p id='title-${index}' class='card-title'>${todo.title}</p><p id='project-${index}'>${todo.project}</p>
    <p id='description-${index}'>${todo.description}</p><p id='due-date-${index}'>${todo.dueDate}</p><p id='priority-${index}'>${todo.priority}</p>
    <p id='completed-${index}'>Completed: ${todo.completed}</p>
    <dialog id='todo-${index}'>
        <form method="dialog">
            <label for='title-edit-${index}'> Title
                <input id='title-edit-${index}' type='text' value='${todo.title}'>
            </label>
            <label for='description-edit-${index}'> Description
                <textarea id='description-edit-${index}'>${todo.description}</textarea>
            </label>
            <label for='due-date-edit-${index}'> DueDate
                <input id='due-date-edit-${index}' type='text' value='${todo.dueDate}'>
            </label>
            <label for='priority-edit-${index}'> Priority
                <input id='priority-edit-${index}' type='text' value='${todo.priority}'>
            </label>
            <label for='completed-edit-${index}'> Completed
                <input id='completed-edit-${index}' type='text' value='${todo.completed}'>
            </label>
            <button id='close-${index}' type='cancel'>Close</button>
            <button id='save-${index}' type='submit'>Save</button>
        </form>
    </dialog>`;

    const cardsContainer = document.querySelector('#cards-container');
    cardsContainer.appendChild(card);

    const dialog = document.getElementById(`todo-${index}`);

    card.addEventListener('click', ()=>{
        dialog.showModal();
        console.log(index);
    });

    const closeButton = document.getElementById(`close-${index}`);
    closeButton.addEventListener('click', ()=>{
        dialog.close();
    });

    const saveButton = document.getElementById(`save-${index}`);
    saveButton.addEventListener('click', ()=>{
        todo.title = document.querySelector(`#title-edit-${index}`).value;
        todo.description = document.querySelector(`#description-edit-${index}`).value;
        todo.dueDate = document.querySelector(`#due-date-edit-${index}`).value;
        todo.priority = document.querySelector(`#priority-edit-${index}`).value;
        todo.completed = document.querySelector(`#completed-edit-${index}`).value;
        document.querySelector(`#title-${index}`).innerHTML = todo.title;
        document.querySelector(`#description-${index}`).innerHTML = todo.description;
    });
}