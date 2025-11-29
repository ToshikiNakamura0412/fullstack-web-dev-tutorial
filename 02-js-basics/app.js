const todoInput = document.getElementById('new-todo-input');
todoInput.addEventListener('keydown', function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});

const addButton = document.getElementById('add-todo-button');
addButton.addEventListener('click', addTodo);

function addTodo() {
  if (todoInput.value === '') {
    alert('ToDoの内容を入力してください！！');
    return;
  }

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox'
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      textNode.className = 'completed';
      newTodoItem.removeChild(deleteButton);
    } else {
      textNode.className = '';
      newTodoItem.appendChild(deleteButton);
    }
  });

  const textNode = document.createElement('span');
  textNode.textContent = todoInput.value;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-button';
  deleteButton.addEventListener('click', function () {
    const todoList = document.getElementById('todo-list');
    todoList.removeChild(newTodoItem);
  });

  const newTodoItem = document.createElement('li');
  newTodoItem.appendChild(checkbox);
  newTodoItem.appendChild(textNode);
  newTodoItem.appendChild(deleteButton);

  const todoList = document.getElementById('todo-list');
  todoList.appendChild(newTodoItem);

  todoInput.value = '';
}
