import {
  createProject,
  projectList,
  populateProjectDropdown,
  Project,
} from "./createProject";
import "../style/main.css";
import { crateProjectBtn, createAddTaskModal } from "./domComponents";
import { clearModal, hideModal, addTask } from "./modal";
import { getProjectsTask, Todo } from "./createTask";

const createProjects = document.querySelector(".addNewProject");
const projectHolder = document.querySelector(".newProjectContainer");
const modalContainer = document.querySelector(".modalContainer");
const showModalBtn = document.getElementById("showModal");

// add task to the array list and display them on the screen
createProjects.addEventListener("click", () => {
  createProject();
  projectHolder.textContent = "";
  projectList.forEach((p, index) => {
    let name = p.getName();
    crateProjectBtn(name, projectHolder, index, getProjectsTask);
  });
  localStorage.setItem("projectList", JSON.stringify(projectList));
});

// add the modal to the DOM and display it
showModalBtn.addEventListener("click", () => {
  hideModal();
  modalContainer.textContent = "";
  createAddTaskModal(modalContainer, clearModal, hideModal, addTask);
  populateProjectDropdown(projectList);
});

// if projects stored in localStorage display them
function displayStoredProjects(projects) {
  projectHolder.textContent = "";
  projects.forEach((p, index) => {
    let name = p.getName();
    crateProjectBtn(name, projectHolder, index, getProjectsTask);
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
  console.log(projectList);
}

window.onload = () => {
  populateProjectListFromStorage();
  displayStoredProjects(projectList);
};
