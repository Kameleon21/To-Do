// creates a new element for a new project on the DOM
export const crateProjectBtn = (
  projectName,
  containerName,
  index,
  getProjectsTask
) => {
  const btn = document.createElement("button");
  btn.textContent = projectName;
  btn.classList.add("btn");
  btn.dataset.id = index;
  btn.addEventListener("click", () => {
    getProjectsTask(index);
  });
  containerName.appendChild(btn);
};

// creates a form for the modal to add tasks
export const createAddTaskModal = (
  modalContainer,
  clearModal,
  hideModal,
  addTask
) => {
  const form = document.createElement("form");
  const addTaskBtn = document.createElement("button");
  const clearBtn = document.createElement("button");
  const hideModalBtn = document.createElement("button");

  // add values to all buttons
  addTaskBtn.type = "button";
  clearBtn.type = "button";
  hideModalBtn.type = "button";

  addTaskBtn.classList.add("modalBtn");
  clearBtn.classList.add("modalBtn");
  hideModalBtn.classList.add("modalBtn");

  addTaskBtn.textContent = "Add Task";
  clearBtn.textContent = "Clear";
  hideModalBtn.textContent = "Hide Modal";

  addTaskBtn.setAttribute("id", "1");

  // add eventListeners
  clearBtn.addEventListener("click", clearModal);
  hideModalBtn.addEventListener("click", () => {
    clearModal();
    hideModal();
  });
  addTaskBtn.addEventListener("click", addTask);

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
  <option value = "" disabled hidden> Select priority</option>
  <option value="High">High</option>
  <option value="Medium">Medium</option>
  <option value="Low">Low</option>
  </select>
  <label for="projectName">Choose Project:</label>
  <select id="projectDropdown">
  </select>
  <div class= "buttonHolder"> 
  </div>
  `;
  form.classList.add("taskForm");

  form.querySelector(".buttonHolder").appendChild(addTaskBtn);
  form.querySelector(".buttonHolder").appendChild(clearBtn);
  form.querySelector(".buttonHolder").appendChild(hideModalBtn);
  modalContainer.appendChild(form);
};

// create an element that will hold each task
export const taskElement = (
  modalContainer,
  titleName,
  dueDate,
  priority,
  projectIndex,
  taskIndex,
  editTask
) => {
  const holder = document.createElement("div");
  const titleHolder = document.createElement("p");
  const dateHolder = document.createElement("p");
  const priorityHolder = document.createElement("div");

  titleHolder.textContent = titleName;
  dateHolder.textContent = dueDate;
  priorityHolder.textContent = priority;
  holder.classList.add("task");

  holder.addEventListener("click", editTask);
  holder.dataset.projectId = projectIndex;
  holder.dataset.id = taskIndex;

  holder.appendChild(titleHolder);
  holder.appendChild(dateHolder);
  holder.appendChild(priorityHolder);
  modalContainer.appendChild(holder);
};

// display the edit form for each task
