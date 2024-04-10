function setTodoList(arr) {
  localStorage.setItem('todolist', JSON.stringify(arr));
}

function getTodoList() {
  let todolist = localStorage.getItem('todolist');
  if (todolist == null) {
    return [];
  } else {
    return JSON.parse(todolist);
  }
}

function generateTodoHTML() {
  let div = document.getElementById('todoContainer');
  let todos = getTodoList();
  let generatedHTML = '';

  for (let i = 0; i < todos.length; i++) {
    generatedHTML += `
    <div class="todo" id="todo${todos[i].id}">
      <span class="status" onclick="toggleTodo(${todos[i].id})">${
      todos[i].completed ? '✅' : '❌'
    }</span>
      <span class="content">
        <span class="word">${todos[i].content}</span>
        <input type="text" style="display: none;">
      </span>
      <div class="buttons">
        <div class="edit" onclick="editTodo(${todos[i].id}, '${
      todos[i].content
    }')">Edit</div>
        <div class="save" style="display: none;" onclick="saveTodo(${
          todos[i].id
        })">Save</div>
        <div class="delete" onclick="deleteTodo(${todos[i].id})">Delete</div>
      </div>
    </div>`;
  }

  div.innerHTML = generatedHTML;
}

function saveTodo(saveId) {
  let input = document.querySelector(`#todo${saveId} input`);

  let oldTodos = getTodoList();
  let newTodos = [];

  for (let i = 0; i < oldTodos.length; i++) {
    if (oldTodos[i].id == saveId) {
      oldTodos[i].content = input.value;
    }
    newTodos.push(oldTodos[i]);
  }

  setTodoList(newTodos);
  generateTodoHTML();
}

function editTodo(editId, content) {
  let word = document.querySelector(`#todo${editId} .word`);
  let input = document.querySelector(`#todo${editId} input`);
  let editBtn = document.querySelector(`#todo${editId} .edit`);
  let saveBtn = document.querySelector(`#todo${editId} .save`);

  word.style.display = 'none';
  input.style.display = 'block';
  editBtn.style.display = 'none';
  saveBtn.style.display = 'block';

  input.value = content;
}

function toggleTodo(toggleId) {
  let oldTodos = getTodoList();
  let newTodos = [];

  for (let i = 0; i < oldTodos.length; i++) {
    if (oldTodos[i].id == toggleId) {
      oldTodos[i].completed = !oldTodos[i].completed;
    }
    newTodos.push(oldTodos[i]);
  }

  setTodoList(newTodos);
  generateTodoHTML();
}

function deleteTodo(deleteId) {
  let oldTodos = getTodoList();
  let newTodos = [];

  for (let i = 0; i < oldTodos.length; i++) {
    if (oldTodos[i].id != deleteId) {
      newTodos.push(oldTodos[i]);
    }
  }

  setTodoList(newTodos);
  generateTodoHTML();
}

function createTodo() {
  let input = document.getElementById('contentInput');
  let oldTodos = getTodoList();

  let maxId = 0;
  for (let i = 0; i < oldTodos.length; i++) {
    if (maxId < oldTodos[i].id) {
      maxId = oldTodos[i].id;
    }
  }

  let newTodo = {
    id: maxId + 1,
    content: input.value,
    completed: false,
  };

  oldTodos.push(newTodo);

  setTodoList(oldTodos);
  generateTodoHTML();
  input.value = '';
}

generateTodoHTML();

/*
{
  id,
  completed,
  content
}

{
  id: number,
  name: string, *
  sold: boolean, 
  quantity: number, *
  price: number / float, *
}
*/
