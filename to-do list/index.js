const form = document.querySelector("form");

// Storage part
const storage = () => {
  window.localStorage.todolist = todoList.innerHTML;
};
const getTodos = () => {
  if (window.localStorage.todolist) {
    todoList.innerHTML = window.localStorage.todolist;
  } else {
    todoList.innerHTML += `<li>Cliquer sur un todo pour le supprimer</li>`;
  }
};

window.addEventListener('load', getTodos());

// Add element
form.addEventListener("submit", (e) => {
  e.preventDefault();
  todoList.innerHTML += `<li>${todoInput.value}</li>`;
  todoInput.value = "";
  storage();
});

// Remove element
todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storage();
});
