import "./style/main.css";
import "./style/modal-task.css";
import { format } from "date-fns";

// class to generate the todo objects

export default class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = format(new Date(dueDate), "dd/MM/yyyy");
    this.priority = priority;
  }

  // Getters
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

  // Setters
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
