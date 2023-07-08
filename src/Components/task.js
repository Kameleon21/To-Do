import Todo from "../index";
import { clearModal, checkModalClass } from "./modal";
import { createTaskDom } from "./domElements";
import { format, parse } from "date-fns";

const button = document.getElementById("newTaskBtn");
const content = document.getElementById("content");
const editBtn = document.getElementById("editBtn");

// an array to store the tasks
const allTasks = [];
// function to assign values and create instance
const addNewTask = (title, description, dueDate, priority) => {
  const task = new Todo(title, description, dueDate, priority);
  allTasks.push(task);
};

// loop through the given array and print out the tasks
function printOutArray() {
  content.textContent = "";
  allTasks.forEach((element) => {
    createTaskDom(element, allTasks, removeTask, viewTask);
  });
}

// remove the task from the given array
function removeTask(element) {
  allTasks.splice(element.target.dataset.ID, 1);
  printOutArray();
}

function viewTask(event) {
  // show the modal with the info of the current element
  checkModalClass();
  button.classList.add("hiddenEditBtn");
  editBtn.classList.remove("hiddenEditBtn");
  let userTitle = document.getElementById("title");
  let userDescription = document.getElementById("description");
  let userDueDate = document.getElementById("dueDate");
  let userPriority = document.getElementById("priority");
  // format the stored date value
  const storedDate = allTasks[event.target.dataset.ID].getDueDate();
  const parsedDate = parse(storedDate, "dd/MM/yyyy", new Date());
  const formattedDueDate = format(parsedDate, "yyyy-MM-dd");
  userTitle.value = allTasks[event.target.dataset.ID].getTitle();
  userDescription.value = allTasks[event.target.dataset.ID].getDescription();
  userDueDate.value = formattedDueDate;
  userPriority.value = allTasks[event.target.dataset.ID].getPriority();
  editBtn.addEventListener(
    "click",
    function () {
      const idNumber = event.target.dataset.ID;
      let userTitle = document.getElementById("title").value;
      let userDescription = document.getElementById("description").value;
      let userDueDate = document.getElementById("dueDate").value;
      let userPriority = document.getElementById("priority").value;
      allTasks[idNumber].setTitle(userTitle);
      allTasks[idNumber].setDescription(userDescription);
      allTasks[idNumber].setDueDate(userDueDate);
      allTasks[idNumber].setPriority(userPriority);
      editBtn.classList.add("hiddenEditBtn");
      button.classList.remove("hiddenEditBtn");
      checkModalClass();
      clearModal();
      printOutArray();
    },
    { once: true }
  );
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
