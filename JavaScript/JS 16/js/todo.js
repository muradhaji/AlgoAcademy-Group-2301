function setTodoList(arr) {
  localStorage.setItem('todolist', JSON.stringify(arr));
}

function getTodoList() {
  return JSON.parse(localStorage.getItem('todolist'));
}

function generateTodoHTML() {
  let div = document.getElementById('todoContainer');
  let todos = getTodoList();
  let generatedHTML = '';

  for (let i = 0; i < todos.length; i++) {
    generatedHTML += `
    <div class="todo">
      <span class="status">${todos[i].completed ? '✅' : '❌'}</span>
      <span class="content">${todos[i].content}</span>
      <div class="buttons">
        <div class="edit">Edit</div>
        <div class="delete">Delete</div>
      </div>
    </div>`;
  }

  div.innerHTML = generatedHTML;
}

generateTodoHTML();
