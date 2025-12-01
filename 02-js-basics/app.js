class TodoApp {
  constructor() {
    this.todoInput = document.getElementById('new-todo-input');
    this.addButton = document.getElementById('add-todo-button');

    this.addTodo = this.addTodo.bind(this);

    this.todoInput.addEventListener('keydown', function (e) {
      if (e.key === "Enter") {
        this.addTodo();
      }
    });
    this.addButton.addEventListener('click', this.addTodo);
  }

  addTodo() {
    if (this.todoInput.value === '') {
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
    textNode.textContent = this.todoInput.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';

    const todoList = document.getElementById('todo-list');
    deleteButton.addEventListener('click', function () {
      todoList.removeChild(newTodoItem);
    });

    const newTodoItem = document.createElement('li');
    newTodoItem.appendChild(checkbox);
    newTodoItem.appendChild(textNode);
    newTodoItem.appendChild(deleteButton);

    todoList.appendChild(newTodoItem);
    this.todoInput.value = '';
  }
}

const app = new TodoApp();
