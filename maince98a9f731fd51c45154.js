/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/check.png":
/*!******************************!*\
  !*** ./src/assets/check.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/check.e4c04f40366d1b364be2a6b06b150bcb.png");

/***/ }),

/***/ "./src/assets/delete.png":
/*!*******************************!*\
  !*** ./src/assets/delete.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/delete.bfef00d7f015fc837c86ddb9d06eb1d8.png");

/***/ }),

/***/ "./src/assets/pencil.png":
/*!*******************************!*\
  !*** ./src/assets/pencil.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/pencil.928c2e0d805f4c2c077d62c133efb527.png");

/***/ }),

/***/ "./src/style/main.css":
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Components/createProject.js":
/*!*****************************************!*\
  !*** ./src/Components/createProject.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   addTaskToProject: () => (/* binding */ addTaskToProject),
/* harmony export */   createDefaultProject: () => (/* binding */ createDefaultProject),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   deleteProjectObject: () => (/* binding */ deleteProjectObject),
/* harmony export */   findProjectIndex: () => (/* binding */ findProjectIndex),
/* harmony export */   populateProjectDropdown: () => (/* binding */ populateProjectDropdown),
/* harmony export */   projectList: () => (/* binding */ projectList)
/* harmony export */ });
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ "./src/Components/createTask.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/Components/modal.js");



// BluePrint for creating Projects
class Project {
  constructor(name) {
    this.name = name;
    this.task = [];
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

// create array that will store all projects
let projectList = [];

// create a new project and add then to the projectList array
function createProject(projectName) {
  projectName = capitalizeFirstLetter(projectName);
  const project = projectList.find((p) => p.name === projectName);
  if (project) {
    alert("This project is already stored");
  } else {
    if (projectName.length > 1) {
      const project = new Project(projectName);
      projectList.push(project);
    } else {
      alert("Project word count has to be higher than 1");
    }
  }
}

// find out the index of the given project
function findProjectIndex(projectList, projectName) {
  for (let index = 0; index < projectList.length; index++) {
    if (projectList[index].name === projectName) return index;
  }
  return -1;
}

// add task to a project
function addTaskToProject(
  title,
  description,
  dueDate,
  priority,
  arrayName
) {
  const projectName = arrayName;
  let projectNamesIndex = findProjectIndex(projectList, projectName);
  (0,_createTask__WEBPACK_IMPORTED_MODULE_0__.createTask)(
    title,
    description,
    dueDate,
    priority,
    projectList[projectNamesIndex].task
  );
  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.hideModal)();
}

function populateProjectDropdown(projectList) {
  // Get the dropdown element from the DOM
  const projectDropdown = document.getElementById("projectDropdown");

  // Clear the current options in the dropdown
  projectDropdown.innerHTML = "";

  // Generate a new option element for each project and append it to the dropdown
  projectList.forEach((project) => {
    const option = document.createElement("option");
    option.value = project.getName();
    option.text = project.getName();
    projectDropdown.appendChild(option);
  });
}

// capitalize the first letter of project name
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// delete a project object form the array list
const deleteProjectObject = (index) => {
  projectList.splice(index, 1);
  localStorage.setItem("projectList", JSON.stringify(projectList));
  const taskContainer = document.querySelector(".taskContainer");
  taskContainer.textContent = "";
};

// create a default value for task to go to
function createDefaultProject() {
  let inbox = "Inbox";
  createProject(inbox);
}



/***/ }),

/***/ "./src/Components/createTask.js":
/*!**************************************!*\
  !*** ./src/Components/createTask.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   getProjectsTask: () => (/* binding */ getProjectsTask)
/* harmony export */ });
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/Components/createProject.js");
/* harmony import */ var _domComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domComponents */ "./src/Components/domComponents.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./src/Components/modal.js");




// blueprint to create task
class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.done = false;
  }

  //   Getters
  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
  getDueDate() {
    return this.dueDate;
  }

  getPriority() {
    return this.priority;
  }
  //   Setters
  setTitle(title) {
    this.title = title;
  }
  setDescription(description) {
    this.description = description;
  }
  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }
  setPriority(priority) {
    this.priority = priority;
  }
}

// create a task instance and save it to any Array
function createTask(title, description, dueDate, priority, arrayList) {
  const task = new Todo(title, description, dueDate, priority);
  arrayList.push(task);
}

// delete tasks from array
const deleteTask = (event) => {
  const projectId = parseInt(event.currentTarget.dataset.projectId);
  const taskId = parseInt(event.currentTarget.dataset.id);
  _createProject__WEBPACK_IMPORTED_MODULE_0__.projectList[projectId].task.splice(taskId, 1);
  localStorage.setItem("projectList", JSON.stringify(_createProject__WEBPACK_IMPORTED_MODULE_0__.projectList));
  getProjectsTask(projectId);
};

// display tasks stored in a project on the screen
const getProjectsTask = (projectIndex) => {
  const taskContainer = document.querySelector(".taskContainer");
  taskContainer.textContent = " ";
  _createProject__WEBPACK_IMPORTED_MODULE_0__.projectList[projectIndex].task.forEach((element, taskIndex) => {
    const name = element.getTitle();
    const date = element.getDueDate();
    const priority = element.getPriority();
    (0,_domComponents__WEBPACK_IMPORTED_MODULE_1__.taskElement)(
      taskContainer,
      name,
      date,
      priority,
      projectIndex,
      taskIndex,
      editTask,
      deleteTask,
      finishedTask
    );
  });
};

// display tasks in edit modal functions
function editTask(event) {
  const projectId = parseInt(event.currentTarget.dataset.projectId);
  const taskId = parseInt(event.currentTarget.dataset.id);

  // Get task details
  const task = _createProject__WEBPACK_IMPORTED_MODULE_0__.projectList[projectId].task[taskId];

  // Clear the modal container and populate it
  const modalContainer = document.querySelector(".modalContainer");
  // give modal a dataset for specific project and task ID
  modalContainer.dataset.projectId = projectId;
  modalContainer.dataset.taskId = taskId;
  modalContainer.textContent = "";
  (0,_domComponents__WEBPACK_IMPORTED_MODULE_1__.createModal)(modalContainer, _modal__WEBPACK_IMPORTED_MODULE_2__.clearModal, _modal__WEBPACK_IMPORTED_MODULE_2__.hideModal, _modal__WEBPACK_IMPORTED_MODULE_2__.addTaskOrProject, "edit");
  (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.populateProjectDropdown)(_createProject__WEBPACK_IMPORTED_MODULE_0__.projectList);

  // Display the modal
  (0,_modal__WEBPACK_IMPORTED_MODULE_2__.hideModal)();

  // Populate modal fields
  document.getElementById("title").value = task.getTitle();
  document.getElementById("description").value = task.getDescription();
  document.getElementById("dueDate").value = task.getDueDate();
  document.getElementById("priority").value = task.getPriority();
  document.getElementById("projectDropdown").value =
    _createProject__WEBPACK_IMPORTED_MODULE_0__.projectList[projectId].getName();

  //Change add task to edit task
  const title = document.getElementById("1");
  title.textContent = "Edit Task";
}

// toggle the done class when user clicks on the tick
function finishedTask(event) {
  // target that the specif project and task
  const projectId = parseInt(event.currentTarget.dataset.projectId);
  const taskId = parseInt(event.currentTarget.dataset.id);
  // reference that specif task
  const task = _createProject__WEBPACK_IMPORTED_MODULE_0__.projectList[projectId].task[taskId];
  const taskElement = document.querySelector(
    `[data-name="${task.getTitle()}"]`
  );

  // Change the tasks class to done and update done value
  if (task.done === false) {
    taskElement.classList.add("done");
    // remove the background of priority
    if (
      taskElement.classList.contains("high") ||
      taskElement.classList.contains("medium") ||
      taskElement.classList.contains("low")
    ) {
      taskElement.classList.remove("high", "medium", "low");
    }
    task.done = true;
  } else {
    taskElement.classList.remove("done");
    if (task.getPriority() === "High") {
      taskElement.classList.add("high");
    } else if (task.getPriority() === "Medium") {
      taskElement.classList.add("medium");
    } else {
      taskElement.classList.add("low");
    }
    task.done = false;
  }
}


/***/ }),

/***/ "./src/Components/domComponents.js":
/*!*****************************************!*\
  !*** ./src/Components/domComponents.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   crateProjectDiv: () => (/* binding */ crateProjectDiv),
/* harmony export */   createModal: () => (/* binding */ createModal),
/* harmony export */   taskElement: () => (/* binding */ taskElement)
/* harmony export */ });
/* harmony import */ var _assets_delete_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/delete.png */ "./src/assets/delete.png");
/* harmony import */ var _assets_pencil_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/pencil.png */ "./src/assets/pencil.png");
/* harmony import */ var _assets_check_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/check.png */ "./src/assets/check.png");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "./src/Components/modal.js");




// creates a new element for a new project on the DOM
const crateProjectDiv = (
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
  delBtn.innerHTML = `<img src="${_assets_delete_png__WEBPACK_IMPORTED_MODULE_0__["default"]}" alt="delete icon" class="icon del">`;
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
const createModal = (
  modalContainer,
  clearModal,
  hideModal,
  addTaskOrProject,
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
  clearBtn.addEventListener("click", () => {
    clearModal(formType);
  });
  hideModalBtn.addEventListener("click", () => {
    clearModal(formType);
    hideModal();
  });
  addTaskAndProject.addEventListener("click", () => {
    if (formType === "task" || formType === "project") {
      addTaskOrProject(formType);
    } else {
      (0,_modal__WEBPACK_IMPORTED_MODULE_3__.setNewTaskDetails)();
    }
  });

  if (formType === "task" || formType === "edit") {
    form.innerHTML = `
      <label for="title">Title:</label>
      <input type="text" name="title" id="title" />
      <label for="description">Description:</label>
      <textarea name="description" id="description" cols="10" rows="5"></textarea>
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
    `;
  } else {
    form.innerHTML = `
      <label for="projectName">Project Name:</label>
      <input type="text" name="projectName" id="projectName" />
    `;
  }

  form.innerHTML += `
    <div class="buttonHolder"> 
    </div>
  `;

  form.classList.add("taskForm");

  form.querySelector(".buttonHolder").appendChild(addTaskAndProject);
  form.querySelector(".buttonHolder").appendChild(clearBtn);
  form.querySelector(".buttonHolder").appendChild(hideModalBtn);
  modalContainer.appendChild(form);
};

// create an element that will hold each task
const taskElement = (
  modalContainer,
  titleName,
  dueDate,
  priority,
  projectIndex,
  taskIndex,
  editTask,
  deleteTask,
  doneTask
) => {
  const holder = document.createElement("div");
  const titleHolder = document.createElement("p");
  const dateHolder = document.createElement("p");
  const btnHolder = document.createElement("div");
  const delBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  const finishBtn = document.createElement("button");

  titleHolder.textContent = titleName;
  dateHolder.textContent = dueDate;
  delBtn.innerHTML = `<img src="${_assets_delete_png__WEBPACK_IMPORTED_MODULE_0__["default"]}" alt="delete icon" class="icon del">`;
  editBtn.innerHTML = `<img src="${_assets_pencil_png__WEBPACK_IMPORTED_MODULE_1__["default"]}" alt="edit icon" class="icon edit">`;
  finishBtn.innerHTML = `<img src="${_assets_check_png__WEBPACK_IMPORTED_MODULE_2__["default"]}" alt="tick icon" class="icon finish">`;

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
  delBtn.addEventListener("click", deleteTask);
  finishBtn.addEventListener("click", doneTask);

  finishBtn.dataset.projectId = projectIndex;
  finishBtn.dataset.id = taskIndex;
  delBtn.dataset.projectId = projectIndex;
  delBtn.dataset.id = taskIndex;
  editBtn.dataset.projectId = projectIndex;
  editBtn.dataset.id = taskIndex;
  holder.dataset.projectId = projectIndex;
  holder.dataset.id = taskIndex;
  holder.dataset.name = titleName;

  btnHolder.appendChild(finishBtn);
  btnHolder.appendChild(editBtn);
  btnHolder.appendChild(delBtn);
  btnHolder.classList.add("btnHolderForTask");

  holder.appendChild(titleHolder);
  holder.appendChild(dateHolder);
  holder.appendChild(btnHolder);
  modalContainer.appendChild(holder);
};


/***/ }),

/***/ "./src/Components/handle.js":
/*!**********************************!*\
  !*** ./src/Components/handle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayStoredProjects: () => (/* binding */ displayStoredProjects)
/* harmony export */ });
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/Components/createProject.js");
/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/main.css */ "./src/style/main.css");
/* harmony import */ var _domComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domComponents */ "./src/Components/domComponents.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "./src/Components/modal.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTask */ "./src/Components/createTask.js");






const createProjects = document.querySelector(".addNewProject");
const projectHolder = document.querySelector(".newProjectContainer");
const modalContainer = document.querySelector(".modalContainer");
const showModalBtn = document.getElementById("showModal");

// add task to the array list and display them on the screen
createProjects.addEventListener("click", () => {
  (0,_modal__WEBPACK_IMPORTED_MODULE_3__.hideModal)();
  modalContainer.textContent = "";
  (0,_domComponents__WEBPACK_IMPORTED_MODULE_2__.createModal)(
    modalContainer,
    _modal__WEBPACK_IMPORTED_MODULE_3__.clearModal,
    _modal__WEBPACK_IMPORTED_MODULE_3__.hideModal,
    _modal__WEBPACK_IMPORTED_MODULE_3__.addTaskOrProject,
    "project"
  );
});

// add the modal to the DOM and display it
showModalBtn.addEventListener("click", () => {
  (0,_modal__WEBPACK_IMPORTED_MODULE_3__.hideModal)();
  modalContainer.textContent = "";
  (0,_domComponents__WEBPACK_IMPORTED_MODULE_2__.createModal)(
    modalContainer,
    _modal__WEBPACK_IMPORTED_MODULE_3__.clearModal,
    _modal__WEBPACK_IMPORTED_MODULE_3__.hideModal,
    _modal__WEBPACK_IMPORTED_MODULE_3__.addTaskOrProject,
    "task"
  );
  (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.populateProjectDropdown)(_createProject__WEBPACK_IMPORTED_MODULE_0__.projectList);
});

// if projects stored in localStorage display them
function displayStoredProjects() {
  projectHolder.textContent = "";
  _createProject__WEBPACK_IMPORTED_MODULE_0__.projectList.forEach((p, index) => {
    let name = p.getName();
    (0,_domComponents__WEBPACK_IMPORTED_MODULE_2__.crateProjectDiv)(
      name,
      projectHolder,
      index,
      _createTask__WEBPACK_IMPORTED_MODULE_4__.getProjectsTask,
      _createProject__WEBPACK_IMPORTED_MODULE_0__.deleteProjectObject,
      displayStoredProjects
    );
  });
}

function reviveTodo(data) {
  return new _createTask__WEBPACK_IMPORTED_MODULE_4__.Todo(data.title, data.description, data.dueDate, data.priority);
}

function reviveProject(data) {
  const project = new _createProject__WEBPACK_IMPORTED_MODULE_0__.Project(data.name);

  if (Array.isArray(data.task)) {
    project.task = data.task.map(reviveTodo); // Reviving each task
  } else {
    project.task = [];
  }

  return project;
}

function populateProjectListFromStorage() {
  const storedData = JSON.parse(localStorage.getItem("projectList")) || [];
  _createProject__WEBPACK_IMPORTED_MODULE_0__.projectList.length = 0; // clear the array without reassigning it
  storedData.map(reviveProject).forEach((project) => _createProject__WEBPACK_IMPORTED_MODULE_0__.projectList.push(project));
  let ifInbox = _createProject__WEBPACK_IMPORTED_MODULE_0__.projectList.find((p) => p.name === "Inbox");
  if (!ifInbox) {
    (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.createDefaultProject)();
  }
}

window.onload = () => {
  populateProjectListFromStorage();
  displayStoredProjects();
};


/***/ }),

/***/ "./src/Components/modal.js":
/*!*********************************!*\
  !*** ./src/Components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTaskOrProject: () => (/* binding */ addTaskOrProject),
/* harmony export */   clearModal: () => (/* binding */ clearModal),
/* harmony export */   hideModal: () => (/* binding */ hideModal),
/* harmony export */   setNewTaskDetails: () => (/* binding */ setNewTaskDetails)
/* harmony export */ });
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/Components/createProject.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ "./src/Components/createTask.js");
/* harmony import */ var _domComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domComponents */ "./src/Components/domComponents.js");
/* harmony import */ var _handle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handle */ "./src/Components/handle.js");





// clear the modal inputs
const clearModal = (formType) => {
  if (formType === "task" || formType === "edit") {
    // target each input
    let title = document.getElementById("title");
    let textarea = document.getElementById("description");
    let dueDate = document.getElementById("dueDate");
    let priority = document.getElementById("priority");
    let projectsName = document.getElementById("projectDropdown");
    // set each input value to blank
    title.value = " ";
    textarea.value = " ";
    dueDate.value = "";
    priority.value = "";
    projectsName.value = "";
  } else {
    let projectName = document.getElementById("projectName");
    projectName.value = "";
  }
};

// hide the modal
const hideModal = () => {
  const modalContainer = document.querySelector(".modalContainer");
  if (modalContainer.classList.contains("hideModalClass")) {
    modalContainer.classList.remove("hideModalClass");
  } else modalContainer.classList.add("hideModalClass");
};

// add task or project
const addTaskOrProject = (formType) => {
  // check if the form is a task or project
  if (formType === "task") {
    // target the values and store them into variables
    let title = document.getElementById("title").value;
    let textarea = document.getElementById("description").value;
    let dueDate = document.getElementById("dueDate").value;
    let priority = document.getElementById("priority").value;
    let projectsName = document.getElementById("projectDropdown").value;
    // get the index of the project
    const projectIndex = (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.findProjectIndex)(_createProject__WEBPACK_IMPORTED_MODULE_0__.projectList, projectsName);
    // create the task
    (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.addTaskToProject)(title, textarea, dueDate, priority, projectsName);
    localStorage.setItem("projectList", JSON.stringify(_createProject__WEBPACK_IMPORTED_MODULE_0__.projectList));
    // update the display
    (0,_createTask__WEBPACK_IMPORTED_MODULE_1__.getProjectsTask)(projectIndex);
  } else {
    // target the forms input
    let name = document.getElementById("projectName").value;
    // create the project
    (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.createProject)(name);
    const projectHolder = document.querySelector(".newProjectContainer");
    projectHolder.textContent = "";
    _createProject__WEBPACK_IMPORTED_MODULE_0__.projectList.forEach((p, index) => {
      let name = p.getName();
      (0,_domComponents__WEBPACK_IMPORTED_MODULE_2__.crateProjectDiv)(
        name,
        projectHolder,
        index,
        _createTask__WEBPACK_IMPORTED_MODULE_1__.getProjectsTask,
        _createProject__WEBPACK_IMPORTED_MODULE_0__.deleteProjectObject,
        _handle__WEBPACK_IMPORTED_MODULE_3__.displayStoredProjects
      );
    });
    hideModal();
    localStorage.setItem("projectList", JSON.stringify(_createProject__WEBPACK_IMPORTED_MODULE_0__.projectList));
  }
};

const setNewTaskDetails = () => {
  // target modal
  const modalContainer = document.querySelector(".modalContainer");

  // get dataset vales for modal
  const projectId = parseInt(modalContainer.dataset.projectId);
  const taskId = parseInt(modalContainer.dataset.taskId);

  // Get task details
  const task = _createProject__WEBPACK_IMPORTED_MODULE_0__.projectList[projectId].task[taskId];

  // set new values
  task.setTitle(document.getElementById("title").value);
  task.setDescription(document.getElementById("description").value);
  task.setDueDate(document.getElementById("dueDate").value);
  task.setPriority(document.getElementById("priority").value);
  let projectsName = document.getElementById("projectDropdown").value;

  // create a condition that checks if the value of projectDropDown has been changed to a new project
  if (projectsName !== _createProject__WEBPACK_IMPORTED_MODULE_0__.projectList[projectId].getName()) {
    let title = document.getElementById("title").value;
    let textarea = document.getElementById("description").value;
    let dueDate = document.getElementById("dueDate").value;
    let priority = document.getElementById("priority").value;
    (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.addTaskToProject)(title, textarea, dueDate, priority, projectsName);
    _createProject__WEBPACK_IMPORTED_MODULE_0__.projectList[projectId].task.splice(taskId, 1);
    hideModal();
    localStorage.setItem("projectList", JSON.stringify(_createProject__WEBPACK_IMPORTED_MODULE_0__.projectList));
    (0,_createTask__WEBPACK_IMPORTED_MODULE_1__.getProjectsTask)(projectId);
  }
  localStorage.setItem("projectList", JSON.stringify(_createProject__WEBPACK_IMPORTED_MODULE_0__.projectList));
  hideModal();
  (0,_createTask__WEBPACK_IMPORTED_MODULE_1__.getProjectsTask)(projectId);
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/Components/createTask.js");
/******/ 	__webpack_require__("./src/Components/createProject.js");
/******/ 	__webpack_require__("./src/Components/handle.js");
/******/ 	__webpack_require__("./src/Components/domComponents.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Components/modal.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=maince98a9f731fd51c45154.js.map