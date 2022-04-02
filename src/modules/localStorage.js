// on reload
const taskLocalStorage = createTaskObject => {
  if (localStorage.getItem('taskList')) {
    const taskList = [];
    const tempTasks = JSON.parse(localStorage.getItem('taskList'));
    tempTasks.forEach(task => {
      const taskObject = createTaskObject(task);
      taskList.push(taskObject);
    });
    return taskList;
  }

  localStorage.setItem('taskList', JSON.stringify([]));
  return [];
};

// on data changes
const alterBookList = data => {
  localStorage.setItem('taskList', JSON.stringify(data));
};
export { taskLocalStorage as default, alterBookList };