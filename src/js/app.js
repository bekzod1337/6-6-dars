import {
  elTodoForm,
  elTodoTemplate,
  elTodosParent,
} from "./html-selection.js";

elTodoForm.onsubmit = function (e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const todoName = data.get("todoName");
  const todoBody = data.get("todoBody");
  const element = elTodoTemplate.content.cloneNode(true);

  element.getElementById("todoTitle").textContent = todoName;
  const todoBodyEl = element.getElementById("todoBody");
  todoBodyEl.textContent = todoBody;
  if (e.target.checked) {
    todoBodyEl.classList.add("line-through", "opacity-70");
  } else {
    todoBodyEl.classList.remove("line-through", "opacity-70");
  }
  element.getElementById("deleteTodo").onclick = (e) => {
    e.target.parentElement.parentElement.remove();
  };

  elTodosParent.appendChild(element);
  e.target.reset();
};
