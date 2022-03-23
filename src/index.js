import './main.css';
import { updateTask, addNewTaskEvent } from './modules/methods.js';
import storedData from './modules/localStorage';
import MyTasks from './modules/MyTasks.js';
const storedTask_taskObject = (task) => new MyTasks(task.taskName, task.index, task.completed);
const task_taskObject = (taskName) => new MyTasks(taskName);
const listContainer = document.getElementById('to-do-lists');
const data = storedData(storedTask_taskObject)
updateTask(listContainer, data);
addNewTaskEvent(document.getElementById('new-task'), task_taskObject);
console.log(data);