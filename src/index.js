import './main.css';
import data from './modules/data.js';
import { updateTask } from './modules/methods.js';

const listContainer = document.getElementById('to-do-lists');
updateTask(listContainer, data);