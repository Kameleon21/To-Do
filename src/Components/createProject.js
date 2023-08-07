import { createTask } from "./createTask";
import { hideModal } from "./modal";

// BluePrint for creating Projects
class Project {
  constructor(name) {
    this.name = name;
    this.task = [];
  }

  getName() {
    return this.name;
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
    option.value = project.name; // Assuming each project has a 'name' property
    option.text = project.name; // The text that will be displayed in the dropdown
    projectDropdown.appendChild(option);
  });
}
