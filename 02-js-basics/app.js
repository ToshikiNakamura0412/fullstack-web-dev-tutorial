function addTodo() {
  const todoInput = document.getElementById('new-todo-input');
  const todoList = document.getElementById('todo-list');

  if (todoInput.value === '') {
    alert('ToDoの内容を入力してください！！');
    return;
  }

  const newTodoItem = document.createElement('li');
  newTodoItem.textContent = todoInput.value;
  todoList.appendChild(newTodoItem);

  todoInput.value = '';
}

const button = document.getElementById('add-todo-button');
button.addEventListener('click', addTodo);
