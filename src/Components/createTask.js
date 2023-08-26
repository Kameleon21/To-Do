import { projectList, populateProjectDropdown } from "./createProject";
import { taskElement, createModal } from "./domComponents";
import {
  hideModal,
  clearModal,
  setNewTaskDetails,
  addTaskOrProject,
} from "./modal";

// blueprint to create task
export class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.done = false;
  }

  //   Getters
  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
  getDueDate() {
    return this.dueDate;
  }

  getPriority() {
    return this.priority;
  }
  //   Setters
  setTitle(title) {
    this.title = title;
  }
  setDescription(description) {
    this.description = description;
  }
  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }
  setPriority(priority) {
    this.priority = priority;
  }
}

// create a task instance and save it to any Array
export function createTask(title, description, dueDate, priority, arrayList) {
  const task = new Todo(title, description, dueDate, priority);
  arrayList.push(task);
}

// delete tasks from array
const deleteTask = (event) => {
  const projectId = parseInt(event.currentTarget.dataset.projectId);
  const taskId = parseInt(event.currentTarget.dataset.id);
  projectList[projectId].task.splice(taskId, 1);
  localStorage.setItem("projectList", JSON.stringify(projectList));
  getProjectsTask(projectId);
};

// display tasks stored in a project on the screen
export const getProjectsTask = (projectIndex) => {
  const taskContainer = document.querySelector(".taskContainer");
  taskContainer.textContent = " ";
  projectList[projectIndex].task.forEach((element, taskIndex) => {
    const name = element.getTitle();
    const date = element.getDueDate();
    const priority = element.getPriority();
    taskElement(
      taskContainer,
      name,
      date,
      priority,
      projectIndex,
      taskIndex,
      editTask,
      deleteTask,
      finishedTask
    );
  });
};

// display tasks in edit modal functions
export function editTask(event) {
  const projectId = parseInt(event.currentTarget.dataset.projectId);
  const taskId = parseInt(event.currentTarget.dataset.id);

  // Get task details
  const task = projectList[projectId].task[taskId];

  // Clear the modal container and populate it
  const modalContainer = document.querySelector(".modalContainer");
  // give modal a dataset for specific project and task ID
  modalContainer.dataset.projectId = projectId;
  modalContainer.dataset.taskId = taskId;
  modalContainer.textContent = "";
  createModal(modalContainer, clearModal, hideModal, addTaskOrProject, "edit");
  populateProjectDropdown(projectList);

  // Display the modal
  hideModal();

  // Populate modal fields
  document.getElementById("title").value = task.getTitle();
  document.getElementById("description").value = task.getDescription();
  document.getElementById("dueDate").value = task.getDueDate();
  document.getElementById("priority").value = task.getPriority();
  document.getElementById("projectDropdown").value =
    projectList[projectId].getName();

  //Change add task to edit task
  const title = document.getElementById("1");
  title.textContent = "Edit Task";
}

// toggle the done class when user clicks on the tick
function finishedTask(event) {
  // target that the specif project and task
  const projectId = parseInt(event.currentTarget.dataset.projectId);
  const taskId = parseInt(event.currentTarget.dataset.id);
  // reference that specif task
  const task = projectList[projectId].task[taskId];
  const taskElement = document.querySelector(
    `[data-name="${task.getTitle()}"]`
  );

  // Change the tasks class to done and update done value
  if (task.done === false) {
    taskElement.classList.add("done");
    // remove the background of priority
    if (
      taskElement.classList.contains("high") ||
      taskElement.classList.contains("medium") ||
      taskElement.classList.contains("low")
    ) {
      taskElement.classList.remove("high", "medium", "low");
    }
    task.done = true;
  } else {
    taskElement.classList.remove("done");
    if (task.getPriority() === "High") {
      taskElement.classList.add("high");
    } else if (task.getPriority() === "Medium") {
      taskElement.classList.add("medium");
    } else {
      taskElement.classList.add("low");
    }
    task.done = false;
  }
}
