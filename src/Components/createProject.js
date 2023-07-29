import { el, hi } from "date-fns/locale";
import { createTask } from "./createTask";

// BluePrint for creating Projects
class Project {
  constructor(name) {
    this.name = name;
    this.task = [];
  }
}

// create array that will store all projects
const projectList = [];

// create a new project and add then to the projectList array
export function createProject() {
  const projectName = prompt("Enter the name of the project");
  const project = new Project(projectName);
  projectList.push(project);
}

// find out the index of the given project
function findProjectIndex(projectList, projectName) {
  for (let index = 0; index < projectList.length; index++) {
    if (projectList[index].name === projectName) return index;
  }
  return -1;
}

// add task to a project
export function addTaskToProject() {
  const projectName = prompt("Enter the project name to add the task");
  const project = projectList.find((p) => p.name === projectName);
  if (project) {
    let projectNamesIndex = findProjectIndex(projectList, projectName);
    let title = prompt("Enter the title of the task");
    let description = prompt("Enter description");
    let dueDate = prompt("Enter due date");
    let priority = prompt("Enter the priority");
    createTask(
      title,
      description,
      dueDate,
      priority,
      projectList[projectNamesIndex].task
    );
    console.table(projectList);
  } else {
    console.log("No project found");
  }
}
