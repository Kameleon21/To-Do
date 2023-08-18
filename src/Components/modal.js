import {
  addTaskToProject,
  projectList,
  findProjectIndex,
} from "./createProject";
import { getProjectsTask } from "./createTask";

// clear the modal inputs
export const clearModal = () => {
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
};

// hide the modal
export const hideModal = () => {
  const modalContainer = document.querySelector(".modalContainer");
  if (modalContainer.classList.contains("hideModalClass")) {
    modalContainer.classList.remove("hideModalClass");
  } else modalContainer.classList.add("hideModalClass");
};

// add task to the given project
export const addTask = () => {
  // target the values and store them into variables
  let title = document.getElementById("title").value;
  let textarea = document.getElementById("description").value;
  let dueDate = document.getElementById("dueDate").value;
  let priority = document.getElementById("priority").value;
  let projectsName = document.getElementById("projectDropdown").value;
  // get the index of the project
  const projectIndex = findProjectIndex(projectList, projectsName);
  // create the task
  addTaskToProject(title, textarea, dueDate, priority, projectsName);
  // update the display
  getProjectsTask(projectIndex);
};

export const setNewTaskDetails = () => {
  // target modal
  const modalContainer = document.querySelector(".modalContainer");

  // get dataset vales for modal
  const projectId = parseInt(modalContainer.dataset.projectId);
  const taskId = parseInt(modalContainer.dataset.taskId);

  // Get task details
  const task = projectList[projectId].task[taskId];

  // set new values
  task.setTitle(document.getElementById("title").value);
  task.setDescription(document.getElementById("description").value);
  task.setDueDate(document.getElementById("dueDate").value);
  task.setPriority(document.getElementById("priority").value);
  let projectsName = document.getElementById("projectDropdown").value;

  // create a condition that checks if the value of projectDropDown has been changed to a new project
  if (projectsName !== projectList[projectId].getName()) {
    let title = document.getElementById("title").value;
    let textarea = document.getElementById("description").value;
    let dueDate = document.getElementById("dueDate").value;
    let priority = document.getElementById("priority").value;
    addTaskToProject(title, textarea, dueDate, priority, projectsName);
    projectList[projectId].task.splice(taskId, 1);
    hideModal();
    getProjectsTask(projectId);
  }
  hideModal();
  getProjectsTask(projectId);
};
