import {
  createProject,
  addTaskToProject,
  projectList,
  findProjectIndex,
  populateProjectDropdown,
  getProjectsTask,
} from "./createProject";
import "../style/main.css";
import { crateProjectBtn, createAddTaskModal } from "./domComponents";
import { clearModal, hideModal, addTask } from "./modal";

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
});

// add the modal to the DOM and display it
showModalBtn.addEventListener("click", () => {
  hideModal();
  modalContainer.textContent = "";
  createAddTaskModal(modalContainer, clearModal, hideModal, addTask);
  populateProjectDropdown(projectList);
});
