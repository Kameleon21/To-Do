import { createTask } from "./createTask";
import { hideModal, clearModal, setNewTaskDetails } from "./modal";
import { taskElement } from "./domComponents";
import { createAddTaskModal } from "./domComponents";

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
export const projectList = [];

// create a new project and add then to the projectList array
export function createProject() {
  const projectName = prompt("Enter the name of the project");
  const project = new Project(projectName);
  projectList.push(project);
  console.table(projectList);
}

// find out the index of the given project
export function findProjectIndex(projectList, projectName) {
  for (let index = 0; index < projectList.length; index++) {
    if (projectList[index].name === projectName) return index;
  }
  return -1;
}

// add task to a project
export function addTaskToProject(
  title,
  description,
  dueDate,
  priority,
  arrayName
) {
  const projectName = arrayName;
  const project = projectList.find((p) => p.name === projectName);
  if (project) {
    let projectNamesIndex = findProjectIndex(projectList, projectName);
    createTask(
      title,
      description,
      dueDate,
      priority,
      projectList[projectNamesIndex].task
    );
    hideModal();
  } else {
    alert(
      "This project does not exist, you have to first create it before you can add a task to it"
    );
  }
}

export function populateProjectDropdown(projectList) {
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

// display tasks in edit modal functions
export function editTask(event) {
  const projectId = parseInt(event.currentTarget.dataset.projectId);
  const taskId = parseInt(event.currentTarget.dataset.id);

  // Get task details
  const task = projectList[projectId].task[taskId];

  // Clear the modal container and populate it
  const modalContainer = document.querySelector(".modalContainer");
  // give modal a dataset for specific project and task ID
  modalContainer.dataset.projectId = projectId;
  modalContainer.dataset.taskId = taskId;
  modalContainer.textContent = "";
  createAddTaskModal(modalContainer, clearModal, hideModal, setNewTaskDetails);
  populateProjectDropdown(projectList);

  // Display the modal
  hideModal();

  // Populate modal fields
  document.getElementById("title").value = task.getTitle();
  document.getElementById("description").value = task.getDescription();
  document.getElementById("dueDate").value = task.getDueDate();
  document.getElementById("priority").value = task.getPriority();
  document.getElementById("projectDropdown").value =
    projectList[projectId].getName();

  //Change add task to edit task
  const title = document.getElementById("1");
  title.textContent = "Edit Task";
}

// display tasks stored in a project on the screen
export const getProjectsTask = (projectIndex) => {
  const taskContainer = document.querySelector(".taskContainer");
  taskContainer.textContent = " ";
  projectList[projectIndex].task.forEach((element, taskIndex) => {
    const name = element.getTitle();
    const date = element.getDueDate();
    const priority = element.getPriority();
    taskElement(
      taskContainer,
      name,
      date,
      priority,
      projectIndex,
      taskIndex,
      editTask
    );
  });
};
