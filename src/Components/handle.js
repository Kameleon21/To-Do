import {
  projectList,
  populateProjectDropdown,
  Project,
  deleteProjectObject,
  createDefaultProject,
} from "./createProject";
import "../style/main.css";
import { crateProjectDiv, createModal } from "./domComponents";
import { clearModal, hideModal, addTaskOrProject } from "./modal";
import { getProjectsTask, Todo } from "./createTask";

const createProjects = document.querySelector(".addNewProject");
const projectHolder = document.querySelector(".newProjectContainer");
const modalContainer = document.querySelector(".modalContainer");
const showModalBtn = document.getElementById("showModal");

// add task to the array list and display them on the screen
createProjects.addEventListener("click", () => {
  hideModal();
  modalContainer.textContent = "";
  createModal(
    modalContainer,
    clearModal,
    hideModal,
    addTaskOrProject,
    "project"
  );
});

// add the modal to the DOM and display it
showModalBtn.addEventListener("click", () => {
  hideModal();
  modalContainer.textContent = "";
  createModal(
    modalContainer,
    clearModal,
    hideModal,
    addTaskOrProject,
    "task"
  );
  populateProjectDropdown(projectList);
});

// if projects stored in localStorage display them
export function displayStoredProjects() {
  projectHolder.textContent = "";
  projectList.forEach((p, index) => {
    let name = p.getName();
    crateProjectDiv(
      name,
      projectHolder,
      index,
      getProjectsTask,
      deleteProjectObject,
      displayStoredProjects
    );
  });
}

function reviveTodo(data) {
  return new Todo(data.title, data.description, data.dueDate, data.priority);
}

function reviveProject(data) {
  const project = new Project(data.name);

  if (Array.isArray(data.task)) {
    project.task = data.task.map(reviveTodo); // Reviving each task
  } else {
    project.task = [];
  }

  return project;
}

function populateProjectListFromStorage() {
  const storedData = JSON.parse(localStorage.getItem("projectList")) || [];
  projectList.length = 0; // clear the array without reassigning it
  storedData.map(reviveProject).forEach((project) => projectList.push(project));
  let ifInbox = projectList.find((p) => p.name === "Inbox");
  if (!ifInbox) {
    createDefaultProject();
  }
}

window.onload = () => {
  populateProjectListFromStorage();
  displayStoredProjects();
};
