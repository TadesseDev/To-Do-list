const taskLocalStorage = (createTaskObject) => {
  if (localStorage.getItem('taskList')) {
    let taskList = [];
    const tempTasks = JSON.parse(localStorage.getItem('taskList'));
    tempTasks.forEach(task => {
      let taskObject = createTaskObject(task);
      taskList.push(taskObject);
    });
    return taskList;
  }
  else {
    localStorage.setItem('taskList', JSON.stringify([]));
    return [];
  }
}
export default taskLocalStorage;