export function createTaskDom(element, allTasks, removeTask, viewTask) {
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
  btnEdit.dataset.ID = allTasks.indexOf(element);
  // assigning event listener to delete button
  btnDel.addEventListener("click", removeTask);
  btnEdit.addEventListener("click", viewTask);
  // assign class
  parentDiv.classList.add("task");
  btnHolder.classList.add("btnHolder");
  btnDel.classList.add("btnDel");
  btnEdit.classList.add("btnEdit");
  // add each task div to task holder
  content.appendChild(parentDiv);
}

export function createNewProjectDom(projectName, projectsDiv, project) {
  const projectHolder = document.createElement("button");
  projectHolder.textContent = projectName;
  // projectHolder.dataset.ID = project.indexOf(this);
  // projectHolder.addEventListener("click", printOutArray);
  projectHolder.classList.add("btn");
  projectsDiv.appendChild(projectHolder);
}
