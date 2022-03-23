import { alterBookList } from './localStorage.js';
class MyTasks {
  static tasks = [];
  static removeItem = (removeTask) => {
    MyTasks.tasks = MyTasks.filter(task => task.index != removeTask.index);
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
    const li = document.createElement('li');
    const input = `<input type="checkbox" id="${this.index}" name="${this.index}" value="${this.index}"></input>`;
    const label = `<label for="${this.index}">${this.taskName
      }</label>`;
    li.innerHTML = input + label;
    section.insertBefore(li, clear);
  }
  removeFromTaskList = () => {
  }
}
export default MyTasks;