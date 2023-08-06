import { createTask } from "./createTask";

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
  } else {
    console.log("No project found");
  }
}
