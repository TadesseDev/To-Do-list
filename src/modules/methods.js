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
    const li = document.createElement('li');
    const input = `<input type="checkbox" id="${task.index}" name="${task.index}" value="${task.index}"></input>`;
    const label = `<label for="${task.index}">${task.description}</label>`;
    li.innerHTML = input + label;
    section.appendChild(li);
  });
  const li = document.createElement('li');
  li.setAttribute('id', 'clear-list')
  li.innerHTML = '<p>Clear all completed</p>';
  console.log(li);
  section.appendChild(li);
};

const addNewTaskEvent = (element, createTask) => {
  element.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const taskName = this.value;
      const task = createTask(taskName);
      // task.addToDom();
      console.log(task)
      // code for enter
    }
  });
}
export { updateListOfTasks as updateTask, sortTaskByIndex, addNewTaskEvent };
