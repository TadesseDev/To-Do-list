import MyTasks from '../src/modules/MyTasks.js';
import { getTaskItem, toggleTaskStatus } from '../src/modules/methods.js';
const newTask1 = new MyTasks('task one');
const li1 = getTaskItem(newTask1);
const newTask2 = new MyTasks('task two');
const li2 = getTaskItem(newTask2);
const newTask3 = new MyTasks('task three');
const li3 = getTaskItem(newTask3);
document.body.innerHTML = '<ul id="to-do-lists"></ul>';
//-----------------------------------------------------------
describe('Test editing task description', () => {
  const saveEdit = new Event('focusout');
  test('make sure only description for task one is updated', () => {
    const editTaskOne = li1.querySelector('.task-icon');
    const label = li1.querySelectorAll('label')[0];
    editTaskOne.click();
    const input = label.querySelectorAll('input')[0];
    input.value = "the first task";
    input.dispatchEvent(saveEdit);
    expect(newTask1.taskName).toBe('the first task');
    expect(newTask2.taskName).toBe('task two');
    expect(newTask3.taskName).toBe('task three');
  });


  test('make sure only description fo task three is updated', () => {
    const editTaskOne3 = li3.querySelector('.task-icon');
    const label3 = li3.querySelectorAll('label')[0];
    editTaskOne3.click();
    const input3 = label3.querySelectorAll('input')[0];
    input3.value = "task three now has new name";
    input3.dispatchEvent(saveEdit);
    expect(newTask1.taskName).toBe('the first task');
    expect(newTask2.taskName).toBe('task two');
    expect(newTask3.taskName).toBe('task three now has new name');
  })
});
describe('updating an items completed status', () => {
  const checkbox1 = li1.querySelector('input[type="checkbox"]');
  const checkbox2 = li2.querySelector('input[type="checkbox"]');
  const checkbox3 = li3.querySelector('input[type="checkbox"]');
  let checkBoxStatus1 = newTask1.completed;
  let checkBoxStatus2 = newTask2.completed;
  let checkBoxStatus3 = newTask3.completed;
  test('test only the status for task one is updated', () => {
    checkbox1.click();
    expect(newTask1.completed).not.toBe(checkBoxStatus1);
    expect(newTask2.completed).toBe(checkBoxStatus2);
    expect(newTask3.completed).toBe(checkBoxStatus3);
  });

  test('test only the status for task one and two is updated', () => {
    checkBoxStatus1 = newTask1.completed;
    checkbox2.click();
    checkbox3.click();
    expect(newTask1.completed).toBe(checkBoxStatus1);
    expect(newTask2.completed).not.toBe(checkBoxStatus2);
    expect(newTask3.completed).not.toBe(checkBoxStatus3);
  })

});
