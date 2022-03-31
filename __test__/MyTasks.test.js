import MyTasks from '../src/modules/MyTasks.js';
import { getTaskItem, toggleTaskStatus } from '../src/modules/methods.js';

const newTask1 = new MyTasks('task one');
const li1 = getTaskItem(newTask1);
const newTask2 = new MyTasks('task two');
const li2 = getTaskItem(newTask2);
const newTask3 = new MyTasks('task three');
const li3 = getTaskItem(newTask3);
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

//-----------------------------------------------------------
describe('Test editing task description', () => {
  let editTaskOne = li1.querySelector('.task-icon');
  let label = li1.querySelectorAll('label')[0];
  editTaskOne.click();
  let input = label.querySelectorAll('input')[0];
  input.value = "the first task";
  let saveEdit = new Event('focusout');
  input.dispatchEvent(saveEdit);
  expect(newTask1.taskName).toBe('the first task');
  expect(newTask2.taskName).toBe('task two');
  expect(newTask3.taskName).toBe('task three');
  editTaskOne = li3.querySelector('.task-icon');
  label = li3.querySelectorAll('label')[0];
  editTaskOne.click();
  input = label.querySelectorAll('input')[0];
  input.value = "task three now has new name";
  saveEdit = new Event('focusout');
  input.dispatchEvent(saveEdit);
  expect(newTask1.taskName).toBe('the first task');
  expect(newTask2.taskName).toBe('task two');
  expect(newTask3.taskName).toBe('task three now has new name');
});
describe('updating an items completed status', () => {
  const checkbox1 = li1.querySelector('input[type="checkbox"]');
  const checkbox2 = li2.querySelector('input[type="checkbox"]');
  const checkbox3 = li3.querySelector('input[type="checkbox"]');
  let checkBoxStatus1 = newTask1.completed;
  let checkBoxStatus2 = newTask2.completed;
  let checkBoxStatus3 = newTask3.completed;
  checkbox1.click();
  expect(newTask1.completed).not.toBe(checkBoxStatus1);
  expect(newTask2.completed).toBe(checkBoxStatus2);
  expect(newTask3.completed).toBe(checkBoxStatus3);
  checkBoxStatus1 = newTask1.completed;
  checkbox2.click();
  checkbox3.click();
  expect(newTask1.completed).toBe(checkBoxStatus1);
  expect(newTask2.completed).not.toBe(checkBoxStatus2);
  expect(newTask3.completed).not.toBe(checkBoxStatus3);
});
