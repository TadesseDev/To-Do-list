// used to delete a single task
const deleteTask = (element, task) => {
  const li = element.parentNode;
  element.addEventListener('click', () => {
    task.removeFromTaskList();
    li.parentNode.removeChild(li);
  });
};

// used to update the task detail
const alterTask = (element, deleteIcon, task) => {
  const li = element.parentNode;
  const input = document.createElement('input');
  input.IsTabStop = false;
  input.type = 'text';
  const label = li.querySelector('label');
  element.addEventListener('click', () => {
    li.classList.add('edit');
    li.appendChild(deleteIcon);
    // <input type="text" id="new-task" placeholder="Add your list" />
    input.value = label.innerText;
    label.innerHTML = '';
    label.appendChild(input);
    element.setAttribute('style', 'display: none');
    deleteIcon.setAttribute('style', 'display: block');
    // body
  });
  input.addEventListener('focusout', () => {
    li.classList.remove('edit');
    element.setAttribute('style', 'display: block');
    deleteIcon.setAttribute('style', 'display: none');
    label.innerHTML = input.value;
    task.update(input.value);
  });
};

// create a task item to be added to DOM
const getTaskItem = (task) => {
  const li = document.createElement('li');
  li.setAttribute('id', task.index);
  const taskContent = document.createElement('div');
  const input = `<input type="checkbox" id="label-${task.index}" name="${task.index}" value="${task.index}"></input>`;
  const label = `<label for="label-${task.index}">${task.taskName
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
  li.setAttribute('tabindex', 0);
  alterTask(icon, deleteIcon, task);
  deleteTask(deleteIcon, task);
  return li;
};

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
  li.setAttribute('id', 'clear-list');
  li.innerHTML = '<p>Clear all completed</p>';
  section.appendChild(li);
};

// add event to create a new task object and update it to the dom
const addNewTaskEvent = (element, createTask, section) => {
  element.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const taskName = this.value;
      this.value = '';
      const task = createTask(taskName);
      task.addToDom(section);
    }
  });
};
export {
  updateListOfTasks as updateTask, sortTaskByIndex, addNewTaskEvent, getTaskItem,
};
