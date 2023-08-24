import { createTask } from "./createTask";
import { hideModal } from "./modal";

// BluePrint for creating Projects
export class Project {
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
export let projectList = [];

// create a new project and add then to the projectList array
export function createProject() {
  let projectName = capitalizeFirstLetter(
    prompt("Enter the name of the project")
  );
  if (projectName.length > 1) {
    const project = new Project(projectName);
    projectList.push(project);
  } else {
    let flag = true;
    while (flag) {
      alert("Project word count has to be higher than 1");
      projectName = capitalizeFirstLetter(
        prompt("Enter the name of the project")
      );
      if (projectName.length > 1) {
        flag = false;
      }
    }
    const project = new Project(projectName);
    projectList.push(project);
  }
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
  let projectNamesIndex = findProjectIndex(projectList, projectName);
  createTask(
    title,
    description,
    dueDate,
    priority,
    projectList[projectNamesIndex].task
  );
  hideModal();
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

// capitalize the first letter of project name
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// delete a project object form the array list
export const deleteProjectObject = (index) => {
  projectList.splice(index, 1);
  localStorage.setItem("projectList", JSON.stringify(projectList));
  const taskContainer = document.querySelector(".taskContainer");
  taskContainer.textContent = "";
};
