const updateListOfTasks = (section, data) => {
  data.forEach(task => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = task.description;
    li.appendChild(a);
    section.appendChild(li);
  });
}

export { updateListOfTasks as updateTask }