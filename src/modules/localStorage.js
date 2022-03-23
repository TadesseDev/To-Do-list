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

const alterBookList = data => localStorage.setItem('taskList', JSON.stringify(data));
export { taskLocalStorage as default, alterBookList };