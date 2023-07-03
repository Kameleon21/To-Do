import Todo from "../index";
import { clearModal, checkModalClass } from "./modal";
import { domEditTaskForm, dom } from "./DomElements";

const button = document.getElementById("newTaskBtn");
const content = document.getElementById("content");
const modal = document.getElementById("newTask");
const editBtn = document.getElementById("editBtn");

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
  const btnHolder = document.createElement("div");
  const title = document.createElement("p");
  const dueDate = document.createElement("p");
  const btnDel = document.createElement("button");
  const btnEdit = document.createElement("button");
  // assign values of each task to the element
  title.textContent = element.getTitle();
  dueDate.textContent = element.getDueDate();
  btnDel.textContent = "Delete";
  btnEdit.textContent = "Edit";
  // assign new tags to main div
  btnHolder.appendChild(btnDel);
  btnHolder.appendChild(btnEdit);
  parentDiv.appendChild(title);
  parentDiv.appendChild(dueDate);
  parentDiv.appendChild(btnHolder);
  // assigning dataset to delete button
  btnDel.dataset.ID = allTasks.indexOf(element);
  // assigning event listener to delete button
  btnDel.addEventListener("click", removeTask);
  btnEdit.addEventListener("click", editTask);
  // assign class
  parentDiv.classList.add("task");
  btnHolder.classList.add("btnHolder");
  btnDel.classList.add("btnDel");
  btnEdit.classList.add("btnEdit");
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

function editTask() {
  // show the modal with the info of the current element
  checkModalClass();
  button.classList.add("hiddenEditBtn");
  editBtn.classList.remove("hiddenEditBtn");
  let userTitle = document.getElementById("title");
  let userDescription = document.getElementById("description");
  let userDueDate = document.querySelector("#dueDate");
  let userPriority = document.getElementById("priority");

  userTitle.value = allTasks[0].getTitle();
  userDescription.value = allTasks[0].getDescription();
  userDueDate.value = allTasks[0].getDueDate();
  userPriority.value = allTasks[0].getPriority();
  editBtn.addEventListener("click", editEachTask);
  printOutArray();
}

// update the values of the given object
function editEachTask() {
  let userTitle = document.getElementById("title").value;
  let userDescription = document.getElementById("description").value;
  let userDueDate = document.querySelector("#dueDate").value;
  let userPriority = document.getElementById("priority").value;
  allTasks[0].setTitle(userTitle);
  allTasks[0].setDescription(userDescription);
  allTasks[0].setDueDate(userDueDate);
  allTasks[0].setPriority(userPriority);
  checkModalClass();
  clearModal();
  printOutArray();
  editBtn.classList.add("hiddenEditBtn");
  button.classList.remove("hiddenEditBtn");
}

// get the value of modal

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
