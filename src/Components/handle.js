import {
  createProject,
  addTaskToProject,
  projectList,
  findProjectIndex,
} from "./createProject";
import "../style/main.css";
import { crateProjectBtn } from "./domComponents";

const createProjects = document.querySelector(".addNewProject");
const projectHolder = document.querySelector(".newProjectContainer");

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
