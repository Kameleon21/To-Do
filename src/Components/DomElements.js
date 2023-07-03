

// Dom element for Edit Form
export function domEditTaskForm(modalDiv) {
  const editForm = document.createElement("form");
  editForm.innerHTML = `<button type="button" class="hideModal">X</button>
    <label for="title">Title:</label>
    <input type="text" name="title" id="title" />
    <label for="description">Description:</label>
    <textarea
      name="description"
      id="description"
      cols="10"
      rows="5"
    ></textarea>
    <label for="dueDate">Due Date:</label>
    <input type="date" name="dueDate" id="dueDate" />
    <label for="priority">Priority:</label>
    <select name="priority" id="priority">
      <option value="Complete">Completed</option>
      <option value="Doing">Doing</option>
      <option value="To-Do">To-Do</option>
    </select>
    <div class="btnHolder">
      <button type="button" id="editBtn">Edit</button>
      <button type="button" class="Clear">Clear</button>`;
  modalDiv.appendChild(editForm);
}

// Dom element for adding new task form

export function domTaskForm(modalDiv) {
  const taskForm = document.createElement("form");
  taskForm.innerHTML = `<button type="button" class="hideModal">X</button>
  <label for="title">Title:</label>
  <input type="text" name="title" id="title" />
  <label for="description">Description:</label>
  <textarea
    name="description"
    id="description"
    cols="10"
    rows="5"
  ></textarea>
  <label for="dueDate">Due Date:</label>
  <input type="date" name="dueDate" id="dueDate" />
  <label for="priority">Priority:</label>
  <select name="priority" id="priority">
    <option value="Complete">Completed</option>
    <option value="Doing">Doing</option>
    <option value="To-Do">To-Do</option>
  </select>
  <div class="btnHolder">
    <button type="button" id="newTaskBtn" >Add Task</button>
    <button type="button" class="Clear">Clear</button>`;
  taskForm.setAttribute("method", "post");
  taskForm.setAttribute("id", "newTask");
  modalDiv.appendChild(taskForm);
}
