"use strict";
const formEL = document.getElementById('todo-form');
const inputEl = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON === null) {
        return [];
    }
    else {
        return JSON.parse(todosJSON);
    }
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: inputEl.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    inputEl.value = '';
}
function createTodo(todo) {
    const listEl = document.createElement('li');
    const checkbox = document.createElement('input');
    const newTodoText = todo.text;
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    listEl.append(newTodoText);
    listEl.append(checkbox);
    todoList.append(listEl);
}
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
formEL.addEventListener('submit', handleSubmit);
