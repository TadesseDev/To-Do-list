import './main.css';
import data from './modules/data';
import { updateTask } from './modules/methods';

const listContainer = document.getElementById('to-do-lists');
updateTask(listContainer, data);
console.log(data);