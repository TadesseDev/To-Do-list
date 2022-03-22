// can be used to sort tasks ascending or descending
const sortTaskByIndex = (data, mode = 'ascending') => {
  const tempData = [...data];
  if (mode === 'ascending') tempData.sort((a, b) => a.index - b.index);
  else tempData.sort((a, b) => b.index - a.index);
  return tempData;
};

// sort and update list of tasks to the place holder
const updateListOfTasks = (section, data) => {
  section.innerHTML = `<li><span class="title">Today's To Do</span></li>
                        <li><label for="new-task"></label><input type="text" id="new-task" placeholder="Add your list"></li>`;
  data = sortTaskByIndex(data);
  data.forEach((task) => {
    const li = document.createElement('li');
    const input = `<input type="checkbox" id="${task.index}" name="${task.index}" value="${task.index}"></input>`;
    const label = `<label for="${task.index}">${task.description}</label>`;
    li.innerHTML = input + label;
    section.appendChild(li);
  });
  const li = document.createElement('li');
  li.innerHTML = '<p>Clear all completed</p>';
  section.appendChild(li);
};

export { updateListOfTasks as updateTask, sortTaskByIndex };