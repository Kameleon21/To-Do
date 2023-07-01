import Todo from "./index";
import { clearModal, checkModalClass } from "./modal";

const button = document.getElementById("newTaskBtn");
const content = document.getElementById("content");
const taskModal = document.querySelector(".taskModal");
// an array to store the tasks
const allTasks = [];

// function to assign values and create instance
const addNewTask = (title, description, dueDate, priority) => {
  const task = new Todo(title, description, dueDate, priority);
  allTasks.push(task);
};

// create function to print out items in the array
function printOutArray() {
  content.textContent = "";
  allTasks.forEach((element) => {
    // create the elements
    const div = document.createElement("div");
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
    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(dueDate);
    div.appendChild(priority);
    // assign class
    div.classList.add("task");
    content.appendChild(div);
  });
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
