import MyTasks from '../src/modules/MyTasks.js';
// import { getTaskItem, toggleTaskStatus } from '../src/modules/methods.js';

const newTask1 = new MyTasks('task one');
const newTask2 = new MyTasks('task two');
const newTask3 = new MyTasks('task three');
document.body.innerHTML = '<ul id="to-do-lists"></ul>';

const section = document.getElementById('to-do-lists');
describe('adding elements to the task list and local storage', () => {
  test('check the local storage for save tasks', () => {
    expect(JSON.parse(localStorage.getItem('taskList')).length).toEqual(3);
  });
  test('check the task list for list of tasks', () => {
    expect(MyTasks.tasks.length).toBe(3);
  });
});

describe('check the DOM for add and remove tasks', () => {
  test('check adding task to the DOM', () => {
    expect(section.querySelectorAll('li').length).toBe(0);
    newTask1.addToDom(section);
    expect(section.querySelectorAll('li').length).toBe(1);
    newTask2.addToDom(section);
    expect(section.querySelectorAll('li').length).toBe(2);
    newTask3.addToDom(section);
    expect(section.querySelectorAll('li').length).toBe(3);
  });
  test('check removing task from the DOM', () => {
    expect(section.querySelectorAll('li').length).toBe(3);
    newTask1.removeFromDom(section);
    expect(section.querySelectorAll('li').length).toBe(2);
    newTask2.removeFromDom(section);
    expect(section.querySelectorAll('li').length).toBe(1);
    newTask3.removeFromDom(section);
    expect(section.querySelectorAll('li').length).toBe(0);
  });
});
