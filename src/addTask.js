import Todo from "./index";

let button = document.getElementById("button");
let content = document.getElementById("content");

// an array to store the tasks
const allTasks = [];

// function to assign values and create instance
const addNewTask = (title, description, dueDate, priority) => {
  const task = new Todo(title, description, dueDate, priority);
  allTasks.push(task);
};

// add eventListener to create a task on button click
button.addEventListener("click", () => {
  let userTitle = document.getElementById("title").value;
  let userDescription = document.getElementById("description").value;
  let userDueDate = document.querySelector("#dueDate").value;
  let userPriority = document.getElementById("priority").value;
  addNewTask(userTitle, userDescription, userDueDate, userPriority);
  printOutArray();
});

// code to print out the tasks in array
// create function to create teh Dom element
function createDom(title, description, dueDate, priority) {
  const output = `<p>${title}</p><br>
  <p>${description}</p><br>
  <p>${dueDate}</p><br>
  <p>${priority}</p>`;
  // target the content div
  content.appendChild(output);
}

// create function to print out items in the array
function printOutArray() {
  content.textContent = "";
  allTasks.forEach((element) => {
    const div = document.createElement("div");
    const title = document.createElement("h2");
    const description = document.createElement("p");
    const dueDate = document.createElement("p");
    const priority = document.createElement("p");
    title.textContent = element.getTitle();
    description.textContent = element.getDescription();
    dueDate.textContent = element.dueDate;
    priority.textContent = element.priority;
    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(dueDate);
    div.appendChild(priority);
    content.appendChild(div);
  });
}
