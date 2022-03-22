const updateListOfTasks = (section, data) => {
  data.forEach((task) => {
    const li = document.createElement('li');
    const input = `<input type="checkbox" id="${data.index}" name="${data.index}" value="${data.index}">${task.description}</input>`;
    li.innerHTML = input;
    section.appendChild(li);
  });
};

export { updateListOfTasks as updateTask };