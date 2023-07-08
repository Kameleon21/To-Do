import { checkModalClass, checkSideModal, clearSideModal } from "./modal";

const newProjectBtn = document.querySelector(".addProjects");
const addProjectBtn = document.querySelector(".add");
const exitProjectBtn = document.querySelector(".exit");

// Define a project Class
class Project {
  constructor(name) {
    (this.name = name), (this.task = []);
  }
}

// Create an array to store projects
const projects = [];

// function to create a new project
function createProject() {
  const projectName = prompt("Enter the project name:");
  const projectSearch = projects.find(
    (p) => p.name.toLowerCase() === projectName.toLocaleLowerCase()
  );
  if (projectSearch) {
    console.log("This Project already exists");
  } else {
    const project = new Project(projectName);
    projects.push(project);
    addTaskToProject();
    console.log(project);
  }
}

// Function to add task to a project
function addTaskToProject() {
  const projectName = prompt("Enter the project name to add the task:");
  const project = projects.find(
    (p) => p.name.toLocaleLowerCase() === projectName.toLocaleLowerCase()
  );
  if (project) {
    const taskName = prompt("Enter the task name:");
    project.task.push(taskName);
    console.log(`Task ${taskName} added to project ${projectName}`);
  } else console.log(`Project ${projectName} not found`);
  console.log(projects);
}

// bring up the new project modal
newProjectBtn.addEventListener("click", checkSideModal);

// clear the view of the new project and hide the modal
exitProjectBtn.addEventListener("click", () => {
  clearSideModal();
  checkSideModal();
});

addProjectBtn.addEventListener("click", () => {
  createProject();
  checkSideModal();
});
