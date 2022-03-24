import { alterBookList } from './localStorage.js';
import { getTaskItem } from '../modules/methods.js';

class MyTasks {
  static tasks = [];
  static updateData = (task, name) => {
    for (const item of MyTasks.tasks) {
      if (task == item) {
        item.taskName = name;
        break;
      }
    }
    alterBookList(MyTasks.tasks);
  }
  static removeItem = (removeTask) => {
    MyTasks.tasks = MyTasks.tasks.filter(task => task.index != removeTask.index);
    let i = 0;

    // update task index on each remove
    MyTasks.tasks.forEach(function (task) {
      task.index = i;
      i++;
    });
    alterBookList(MyTasks.tasks);
  }
  static addItem = (task) => {
    MyTasks.tasks.push(task);
    alterBookList(MyTasks.tasks);
  }
  constructor(taskName, index = MyTasks.tasks.length, completed = false) {
    this.taskName = taskName;
    this.index = index;
    this.completed = completed;
    this.addToTaskList();
  }
  addToTaskList = () => {
    MyTasks.addItem(this);
  }
  addToDom(section) {
    const clear = document.getElementById('clear-list');
    getTaskItem(this);
    section.insertBefore(getTaskItem(this), clear);
  }
  removeFromTaskList = () => MyTasks.removeItem(this);
  update = name => MyTasks.updateData(this, name);
}
export default MyTasks;