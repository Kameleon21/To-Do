// create a new element for a new project on the DOM
export const crateProjectBtn = (projectName, containerName, index) => {
  const btn = document.createElement("button");
  btn.textContent = projectName;
  btn.classList.add("btn");
  btn.dataset.ID = index;
  containerName.appendChild(btn);
};
