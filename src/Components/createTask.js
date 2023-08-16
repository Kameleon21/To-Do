import { parse, format } from "date-fns";
import { projectList, getProjectsTask } from "./createProject";

// blueprint to create task
class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
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
export const deleteTask = (event) => {
  const projectId = parseInt(event.currentTarget.dataset.projectId);
  const taskId = parseInt(event.currentTarget.dataset.id);

  // delete that item form array and then update the screen
  projectList[projectId].task.splice(taskId, 1);
  getProjectsTask(projectId);
};
