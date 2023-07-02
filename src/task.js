import Todo from "./index";
import { clearModal, checkModalClass } from "./modal";

const button = document.getElementById("newTaskBtn");
const content = document.getElementById("content");
// an array to store the tasks
const allTasks = [];

// function to assign values and create instance
const addNewTask = (title, description, dueDate, priority) => {
  const task = new Todo(title, description, dueDate, priority);
  allTasks.push(task);
};

// create DOM elements
function createDomElements(element) {
  // create the elements
  const parentDiv = document.createElement("div");
  const infoHolder = document.createElement("div");
  const buttonHolder = document.createElement("div");
  const btnDel = document.createElement("button");
  const title = document.createElement("p");
  const description = document.createElement("p");
  const dueDate = document.createElement("p");
  const priority = document.createElement("p");
  // assign values of each task to the element
  title.textContent = element.getTitle();
  description.textContent = element.getDescription();
  dueDate.textContent = element.getDueDate();
  priority.textContent = element.getPriority();
  // assign new tags to main div
  infoHolder.appendChild(title);
  infoHolder.appendChild(description);
  infoHolder.appendChild(dueDate);
  infoHolder.appendChild(priority);
  btnDel.textContent = "Delete Task";
  // assigning dataset to delete button
  btnDel.dataset.ID = allTasks.indexOf(element);
  // assigning event listener to delete button
  btnDel.addEventListener("click", removeTask);
  // assign class
  parentDiv.classList.add("task");
  btnDel.classList.add("taskBtnDel");
  infoHolder.classList.add("infoHolder");
  // assign btnDel to buttonHolder
  buttonHolder.appendChild(btnDel);
  // assign info in parentDiv and button holder
  parentDiv.appendChild(infoHolder);
  parentDiv.appendChild(buttonHolder);
  // add each task div to task holder
  content.appendChild(parentDiv);
}

// loop through the given array and print out the tasks
function printOutArray() {
  content.textContent = "";
  allTasks.forEach((element) => {
    createDomElements(element);
  });
}

// remove the task from the given array
function removeTask(element) {
  allTasks.splice(element.target.dataset.ID, 1);
  printOutArray();
}

// add eventListener to create a task on button click
button.addEventListener("click", () => {
  let userTitle = document.getElementById("title").value;
  let userDescription = document.getElementById("description").value;
  let userDueDate = document.querySelector("#dueDate").value;
  let userPriority = document.getElementById("priority").value;
  addNewTask(userTitle, userDescription, userDueDate, userPriority);
  printOutArray();
  clearModal();
  checkModalClass();
});
