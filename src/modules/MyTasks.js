import { alterBookList } from './localStorage.js';
import { getTaskItem } from '../modules/methods.js';

class MyTasks {
  static tasks = [];
  static removeItem = (removeTask) => {
    console.log(removeTask);
    MyTasks.tasks = MyTasks.tasks.filter(task => task.index != removeTask.index);
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
}
export default MyTasks;