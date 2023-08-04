import {
  createProject,
  addTaskToProject,
  projectList,
  findProjectIndex,
} from "./createProject";
import "../style/main.css";
import { crateProjectBtn, createAddTaskModal } from "./domComponents";
import { clearModal, hideModal } from "./modal";
import { tr } from "date-fns/locale";

const createProjects = document.querySelector(".addNewProject");
const projectHolder = document.querySelector(".newProjectContainer");
const modalContainer = document.querySelector(".modalContainer");
const showModalBtn = document.getElementById("showModal");

// add task to the array list and display them on the screen
createProjects.addEventListener("click", () => {
  createProject();
  projectHolder.textContent = " ";
  projectList.forEach((p) => {
    let name = p.getName();
    let indexNumber = findProjectIndex(projectList, name);
    crateProjectBtn(name, projectHolder, indexNumber);
  });
});

// add the modal to the DOM and display it
showModalBtn.addEventListener("click", () => {
  modalContainer.textContent = "";
  hideModal();
  createAddTaskModal(modalContainer, clearModal, hideModal);
});
