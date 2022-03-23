import './main.css';
// import data from './modules/data.js';
import { updateTask } from './modules/methods.js';
import storedData from './modules/localStorage';

const listContainer = document.getElementById('to-do-lists');
updateTask(listContainer, storedData());