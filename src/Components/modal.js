const modalContainer = document.querySelector(".modalContainer");

// clear the modal inputs
export const clearModal = () => {
  // target each input
  let title = document.getElementById("title");
  let textarea = document.getElementById("description");
  let dueDate = document.getElementById("dueDate");
  let priority = document.getElementById("priority");
  let projectsName = document.getElementById("project");
  // set each input value to blank
  title.value = " ";
  textarea.value = " ";
  dueDate.value = "";
  priority.value = "";
  projectsName.value = "";
};

// hide the modal
export const hideModal = () => {
  if (modalContainer.classList.contains("hideModalClass")) {
    modalContainer.classList.remove("hideModalClass");
  } else modalContainer.classList.add("hideModalClass");
};
