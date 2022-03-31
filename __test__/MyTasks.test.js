import MyTasks from "../src/modules/MyTasks";
const localStorageMock = {
  data: {},
  getItem: jest.fn((name) => localStorageMock.data[name]),
  setItem: jest.fn((name, value) => {
    localStorageMock.data[name] = value;
  }),
  clear: jest.fn()
};
global.localStorage = localStorageMock;
const newTask1 = new MyTasks('task one');
const newTask2 = new MyTasks('task two');
const newTask3 = new MyTasks('task three');
console.log(MyTasks.tasks);
test('test adding new element to the local storage and task list', () => {
  expect(localStorage.setItem).toHaveBeenCalled();
  expect(JSON.parse(localStorage.getItem('taskList')).length).toEqual(3);
  expect(MyTasks.tasks.length).toBe(3);
});
