// import all required modules
import './main.css';
import { updateTask, addNewTaskEvent } from './modules/methods.js';
import storedData from './modules/localStorage.js';
import MyTasks from './modules/MyTasks.js';

// declare constants we need through out the execution
// declare call back functions
const storedTaskTaskObject = (task) => new MyTasks(task.taskName, task.index, task.completed);
const taskTaskObject = (taskName) => new MyTasks(taskName);
const listContainer = document.getElementById('to-do-lists');// prepare section for use
const data = storedData(storedTaskTaskObject);// create task object from local storage data

// update tasks to the DOM and associate event.
updateTask(listContainer, data);
addNewTaskEvent(document.getElementById('new-task'), taskTaskObject, listContainer);

const clearList = document.getElementById('clear-list');
clearList.addEventListener('click', () => {
  MyTasks.clearCompleted();
});