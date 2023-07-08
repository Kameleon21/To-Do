const addTaskBtn = document.querySelector(".addTask");
const modalDiv = document.querySelector(".taskModal");
const modal = document.getElementById("newTask");
const clear = document.querySelector(".Clear");
const sideModal = document.querySelector(".projectModal");

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
  if (modalDiv.classList.contains("modalHide")) {
    modalDiv.classList.remove("modalHide");
  } else {
    modalDiv.classList.add("modalHide");
  }
}

// check if sidebar modal is visible or not
export function checkSideModal() {
  if (sideModal.classList.contains("hideProject")) {
    sideModal.classList.remove("hideProject");
  } else {
    sideModal.classList.add("hideProject");
  }
}

// clear the sideModal after either add or edit has been clicked
export const clearSideModal = () => {
  const projectTitle = document.getElementById("projectName");
  projectTitle.value = " ";
};

// clear the modal when user still on filling out details
// clear.addEventListener("click", clearModal);

// load up modal when add task gets button gets pressed
addTaskBtn.addEventListener("click", () => {
  checkModalClass();
});
