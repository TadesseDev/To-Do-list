import MyTasks from "../src/modules/MyTasks";

const newTask1 = new MyTasks('task one');
const newTask2 = new MyTasks('task two');
const newTask3 = new MyTasks('task three');
document.body.innerHTML = `<ul id="to-do-lists"></ul>`;
const section = document.getElementById('to-do-lists');
