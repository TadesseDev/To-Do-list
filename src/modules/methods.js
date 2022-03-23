
const deleteTask = (element, task) => {
  const li = element.parentNode;
  element.addEventListener('click', function (e) {
    console.log('deleting task');
    console.log(task);
    task.removeFromTaskList();
    li.parentNode.removeChild(li);
  });
}

const alterTask = (element, deleteIcon) => {
  const li = element.parentNode;
  console.log(li);
  element.addEventListener('click', function (e) {
    console.log(this.parentNode);
    li.appendChild(deleteIcon);
    element.setAttribute('style', 'display: none');
    deleteIcon.setAttribute('style', 'display: block');
    // body
  });

  li.addEventListener('mouseleave', function (e) {
    element.classList.remove('edit');
    li.classList.remove('edit');
    element.setAttribute('style', 'display: block');
    deleteIcon.setAttribute('style', 'display: none');
    // body
  });
}

const getTaskItem = (task) => {
  const li = document.createElement('li');
  li.setAttribute('id', task.index);
  const taskContent = document.createElement('div');
  const input = `<input type="checkbox" id="${task.index}-check" name="${task.index}" value="${task.index}"></input>`;
  const label = `<label for="${task.index}-check">${task.taskName
    }</label>`;
  const deleteIcon = document.createElement('span');
  deleteIcon.classList.add('task-icon');
  deleteIcon.classList.add('edit');
  deleteIcon.setAttribute('style', 'display: none');
  taskContent.innerHTML = input + label;
  const icon = document.createElement('span');
  icon.classList.add('task-icon');
  li.appendChild(taskContent);
  li.appendChild(icon);
  li.appendChild(deleteIcon);
  alterTask(icon, deleteIcon);
  deleteTask(deleteIcon, task);
  return li;
}
// can be used to sort tasks ascending or descending
const sortTaskByIndex = (data, mode = 'ascending') => {
  const tempData = [...data];
  if (mode === 'ascending') tempData.sort((a, b) => a.index - b.index);
  else tempData.sort((a, b) => b.index - a.index);
  return tempData;
};

// sort and update list of tasks to the place holder
const updateListOfTasks = (section, data) => {
  data = sortTaskByIndex(data);
  data.forEach((task) => {
    section.appendChild(getTaskItem(task));
  });
  const li = document.createElement('li');
  li.setAttribute('id', 'clear-list')
  li.innerHTML = '<p>Clear all completed</p>';
  console.log(li);
  section.appendChild(li);
};
const addNewTaskEvent = (element, createTask, section) => {
  element.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const taskName = this.value;
      this.value = "";
      const task = createTask(taskName);
      task.addToDom(section);
    }
  });
}
export { updateListOfTasks as updateTask, sortTaskByIndex, addNewTaskEvent, getTaskItem };
