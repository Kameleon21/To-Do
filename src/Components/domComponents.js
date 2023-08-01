// creates a new element for a new project on the DOM
export const crateProjectBtn = (projectName, containerName, index) => {
  const btn = document.createElement("button");
  btn.textContent = projectName;
  btn.classList.add("btn");
  btn.dataset.ID = index;
  containerName.appendChild(btn);
};

// creates a form for the modal to add tasks
export const createAddTaskModal = (modalContainer) => {
  const form = document.createElement("form");
  form.innerHTML = `
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
  <option value="1">High</option>
  <option value="2">Medium</option>
  <option value="3">Low</option>
  </select>
  <div class= "buttonHolder"> 
    <button type="button" class="modalBtn">Add task</button>
    <button type="button" class="modalBtn"> Clear</button>
    <button type="button" class="modalBtn"> Hide Modal</button>
  </div>
  `;
  form.classList.add("taskForm");
  modalContainer.appendChild(form);
};
