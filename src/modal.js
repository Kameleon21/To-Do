const addTaskBtn = document.querySelector(".addTask");
const modal = document.querySelector(".taskModal");
const clear = document.querySelector(".Clear");
const hideModal = document.querySelector(".hideModal");
const projectModal = document.querySelector(".projectModal");

// clear the modal values and hide it form screen when the add task gets hit
export function clearModal() {
  let userTitle = document.getElementById("title");
  let userDescription = document.getElementById("description");
  let userDueDate = document.querySelector("#dueDate");
  let userPriority = document.getElementById("priority");
  userTitle.value = " ";
  userDescription.value = " ";
  userDueDate.value = null;
  userPriority.value = "";
}

// check if modal is visible or not
export function checkModalClass() {
  if (modal.classList.contains("modalHide")) {
    modal.classList.remove("modalHide");
  } else {
    modal.classList.add("modalHide");
  }
}

// clear the modal when user still on filling out details
clear.addEventListener("click", clearModal);

// load up modal when add task gets button gets pressed
addTaskBtn.addEventListener("click", checkModalClass);
