import delIcon from "../assets/delete.png";
import editIcon from "../assets/pencil.png";
// creates a new element for a new project on the DOM
export const crateProjectDiv = (
  projectName,
  containerName,
  index,
  getProjectsTask,
  delProject,
  displayProjects
) => {
  const projectDiv = document.createElement("div");
  const delBtn = document.createElement("button");
  projectDiv.textContent = projectName;
  delBtn.textContent = "X";
  projectDiv.classList.add("projectDiv");
  projectDiv.dataset.id = index;
  projectDiv.setAttribute("id", "project");
  projectDiv.setAttribute("value", projectName);
  projectDiv.addEventListener("click", () => {
    getProjectsTask(index);
  });
  delBtn.addEventListener("click", (event) => {
    delProject(index);
    event.stopPropagation();
    displayProjects();
  });
  projectDiv.appendChild(delBtn);
  containerName.appendChild(projectDiv);
};

// creates a form for the modal to add tasks
export const createAddTaskModal = (
  modalContainer,
  clearModal,
  hideModal,
  addTask,
  addProject,
  formType
) => {
  const form = document.createElement("form");
  const addTaskAndProject = document.createElement("button");
  const clearBtn = document.createElement("button");
  const hideModalBtn = document.createElement("button");

  // add values to all buttons
  addTaskAndProject.type = "button";
  clearBtn.type = "button";
  hideModalBtn.type = "button";

  addTaskAndProject.classList.add("modalBtn");
  clearBtn.classList.add("modalBtn");
  hideModalBtn.classList.add("modalBtn");

  addTaskAndProject.textContent =
    formType === "task" ? "Add Task" : "Create Project";
  clearBtn.textContent = "Clear";
  hideModalBtn.textContent = "Hide Modal";

  addTaskAndProject.setAttribute("id", "1");

  // add eventListeners
  clearBtn.addEventListener("click", clearModal);
  hideModalBtn.addEventListener("click", () => {
    clearModal();
    hideModal();
  });
  addTaskAndProject.addEventListener("click", () => {
    formType === "task" ? addTask() : addProject();
  });

  form.innerHTML = `
  ${
    formType === "task"
      ? `
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
  </select> `
      : `
  <label for="projectName">Project Name:</label>
    <input type="text" name="projectName" id="projectName" />
  `
  }
  <div class= "buttonHolder"> 
  </div>
  `;
  form.classList.add("taskForm");

  form.querySelector(".buttonHolder").appendChild(addTaskAndProject);
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
  editTask,
  deleteTask
) => {
  const holder = document.createElement("div");
  const titleHolder = document.createElement("p");
  const dateHolder = document.createElement("p");
  const btnHolder = document.createElement("div");
  const delBtn = document.createElement("button");
  const editBtn = document.createElement("button");

  titleHolder.textContent = titleName;
  dateHolder.textContent = dueDate;
  delBtn.innerHTML = `<img src="${delIcon}" alt="delete icon" class="icon">`;
  editBtn.innerHTML = `<img src="${editIcon}" alt="edit icon" class="icon">`;

  holder.classList.add("task");

  // condition to determine task color
  if (priority === "High") {
    holder.classList.add("high");
  } else if (priority === "Medium") {
    holder.classList.add("medium");
  } else {
    holder.classList.add("low");
  }
  editBtn.addEventListener("click", editTask);
  holder.dataset.projectId = projectIndex;
  holder.dataset.id = taskIndex;
  delBtn.dataset.projectId = projectIndex;
  delBtn.dataset.id = taskIndex;
  editBtn.dataset.projectId = projectIndex;
  editBtn.dataset.id = taskIndex;

  btnHolder.appendChild(editBtn);
  btnHolder.appendChild(delBtn);
  btnHolder.classList.add("btnHolderForTask");
  delBtn.addEventListener("click", deleteTask);

  holder.appendChild(titleHolder);
  holder.appendChild(dateHolder);
  holder.appendChild(btnHolder);
  modalContainer.appendChild(holder);
};

