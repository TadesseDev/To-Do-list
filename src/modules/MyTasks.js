import { alterBookList } from './localStorage.js';
import { getTaskItem } from './methods.js';

// every task is instance of MyTask class
class MyTasks {
  static tasks = [];

  static clearCompleted = () => {
    const temp = [];
    for (let i = 0; i < MyTasks.tasks.length; i += 1) {
      if (!MyTasks.tasks[i].completed) {
        temp.push(MyTasks.tasks[i]);
      } else {
        MyTasks.tasks[i].removeFromDom();
      }
    }
    MyTasks.tasks = temp;
    alterBookList(MyTasks.tasks);
  }

  static updateStatus(task) {
    for (let i = 0; i < MyTasks.tasks.length; i += 1) {
      if (task === MyTasks.tasks[i]) {
        MyTasks.tasks[i].completed = !MyTasks.tasks[i].completed;
        break;
      }
    }
    alterBookList(MyTasks.tasks);
  }

  static updateData = (task, name) => {
    for (let i = 0; i < MyTasks.tasks.length; i += 1) {
      if (task === MyTasks.tasks[i]) {
        MyTasks.tasks[i].taskName = name;
        break;
      }
    }
    alterBookList(MyTasks.tasks);
  }

  static removeItem = (removeTask) => {
    const temp = [];
    for (let i = 0; i < MyTasks.tasks.length; i += 1) {
      if (removeTask !== MyTasks.tasks[i]) {
        temp.push(MyTasks.tasks[i]);
      }
    }
    MyTasks.tasks = temp;
    // update task index on each remove
    let i = 1;
    MyTasks.tasks.forEach((task) => {
      task.index = i;
      i += 1;
    });
    alterBookList(MyTasks.tasks);
  }

  static addItem = (task) => {
    MyTasks.tasks.push(task);
    alterBookList(MyTasks.tasks);
  }

  // object can be constructed with previous store data or aas new
  constructor(taskName, index = MyTasks.tasks.length + 1, completed = false) {
    this.taskName = taskName;
    this.index = index;
    this.completed = completed;
    this.addToTaskList();
  }

  // every object is capable of adding or removing itself from DOM or list of tasks
  /*
  this four methods in conjunction with the constructor and static methods provide a CRUD
  create,read,update,delete, functionality
   */
  addToTaskList = () => {
    MyTasks.addItem(this);
  }

  addToDom(section) {
    const clear = document.getElementById('clear-list');
    getTaskItem(this);
    section.insertBefore(getTaskItem(this), clear);
  }

  removeFromDom = () => {
    const element = document.getElementById(String(this.index));
    element.remove();
  }

  removeFromTaskList = () => MyTasks.removeItem(this);

  update = (name) => MyTasks.updateData(this, name);

  toggleStatus = () => MyTasks.updateStatus(this);
}
export default MyTasks;