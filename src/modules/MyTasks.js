
class MyTasks {
  static tasks = [];
  constructor(taskName, index = MyTasks.tasks.length, completed = false) {
    this.taskName = taskName;
    this.index = index;
    this.completed = completed;
    this.addToTaskList();
  }
  addToTaskList = () => {
    MyTasks.tasks.push(this)
  }
  addToDom(section) {
    console.log(section);
  }
  removeFromTaskList = () => {
    MyTasks.tasks = MyTasks.filter(task => task.index != this.index);
  }
}
export default MyTasks;