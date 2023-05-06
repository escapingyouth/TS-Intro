interface Todo {
	text: string;
	completed: boolean;
}

const formEL = document.getElementById('todo-form') as HTMLFormElement;
const inputEl = document.getElementById('todo-input') as HTMLInputElement;
const todoList = document.getElementById('todo-list') as HTMLOListElement;

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

function readTodos(): Todo[] {
	const todosJSON = localStorage.getItem('todos')!;
	if (todosJSON === null) {
		return [];
	} else {
		return JSON.parse(todosJSON);
	}
}

function handleSubmit(e: SubmitEvent) {
	e.preventDefault();

	const newTodo: Todo = {
		text: inputEl.value,
		completed: false
	};
	createTodo(newTodo);
	todos.push(newTodo);

	saveTodos();
	inputEl.value = '';
}
function createTodo(todo: Todo) {
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
