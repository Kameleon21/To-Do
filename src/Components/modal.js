import { addTaskToProject } from "./createProject";

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
  // create the task
  addTaskToProject(title, textarea, dueDate, priority, projectsName);
};
