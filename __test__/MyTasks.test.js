import MyTasks from "../src/modules/MyTasks";

const newTask1 = new MyTasks('task one');
const newTask2 = new MyTasks('task two');
const newTask3 = new MyTasks('task three');
document.body.innerHTML = `<ul id="to-do-lists"></ul>`;

describe('adding elements to the task list and local storage', () => {
  test('check the local storage for save tasks', () => {
    expect(JSON.parse(localStorage.getItem('taskList')).length).toEqual(3);
  });
  test('check the task list for list of tasks', () => {
    expect(JSON.parse(localStorage.getItem('taskList')).length).toEqual(3);
  });
  expect(MyTasks.tasks.length).toBe(3);
});

describe('check the DOM for add and remove tasks', () => {
  test('check adding task to the DOM', () => {
    const section = document.getElementById('to-do-lists');
    newTask1.addToDom(section);
    newTask2.addToDom(section);
    newTask3.addToDom(section);
    expect(section.querySelectorAll('li').length).toBe(3);
    console.log((section.querySelectorAll('li').length));
  });
  test('check removing task from the DOM', () => {

  });
})