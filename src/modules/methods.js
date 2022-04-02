//

// toggle task completed status
const toggleTaskStatus = (element, task) => element.addEventListener('click', () => task.toggleStatus());

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
    input.value = label.innerHTML;
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

const createElementWithAttributes = (element, attr = {}) => {
  element = document.createElement(element);
  const objectArray = Object.entries(attr);
  for (let i = 0; i < objectArray.length; i += 1) {
    element.setAttribute(objectArray[i][0], objectArray[i][1]);
  }
  return element;
};

// create a task item to be added to DOM
const getTaskItem = task => {
  const li = document.createElement('li');
  li.setAttribute('id', task.index);
  const taskContent = document.createElement('div');
  const checkBox = createElementWithAttributes('input', {
    type: 'checkbox',
    id: `"label-${task.index}"`,
    name: `"${task.index}"`,
    value: `"${task.index}"`,
  });
  if (task.completed) checkBox.setAttribute('checked', true);
  const label = createElementWithAttributes('label', {
    for: `"label-${task.index}"`,
  });
  label.innerHTML = task.taskName;
  const deleteIcon = document.createElement('span');
  deleteIcon.classList.add('task-icon');
  deleteIcon.classList.add('edit');
  deleteIcon.setAttribute('style', 'display: none');
  taskContent.appendChild(checkBox);
  taskContent.appendChild(label);
  const icon = document.createElement('span');
  icon.classList.add('task-icon');
  li.appendChild(taskContent);
  li.appendChild(icon);
  li.appendChild(deleteIcon);
  li.setAttribute('tabindex', 0);
  alterTask(icon, deleteIcon, task);
  deleteTask(deleteIcon, task);
  toggleTaskStatus(checkBox, task);
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
  data.forEach(task => section.appendChild(getTaskItem(task)));
  const li = document.createElement('li');
  li.setAttribute('id', 'clear-list');
  li.innerHTML = '<p>Clear all completed</p>';
  section.appendChild(li);
};

// add event to create a new task object and update it to the dom
const addNewTaskEvent = (element, createTask, section) => {
  const input = document.getElementById('new-task');
  element.addEventListener('keypress', e => {
    if (input.value === '') { return; }
    if (e.key === 'Enter') {
      const taskName = input.value;
      input.value = '';
      const task = createTask(taskName);
      task.addToDom(section);
    }
  });
  element.addEventListener('click', () => {
    if (input.value === '') { return; }
    if (element.getAttribute('id') === 'enterIcon') {
      const taskName = input.value;
      input.value = '';
      const task = createTask(taskName);
      task.addToDom(section);
    }
  });
};
export {
  updateListOfTasks as updateTask, sortTaskByIndex, addNewTaskEvent, getTaskItem,
};
