const taskLocalStorage = () => {
  if (localStorage.getItem('taskList')) {
    return JSON.parse(localStorage.getItem('taskList'));
  }
  else {
    localStorage.setItem('taskList', JSON.stringify([]));
  }
}
export default taskLocalStorage;