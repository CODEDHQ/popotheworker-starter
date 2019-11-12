import { decorate, observable } from "mobx";
import moment from "moment";

class TasksStore {
  todayTasks = [
    {
      title: "Eat a banana",
      details: "Find a banana. Eat it.",
      due: moment()
    },
    {
      title: "Tell The Monkey to get off his monkey butt and do something.",
      details: "",
      due: moment()
    }
  ];
  futureTasks = [];
  updateLocalStorage = () => {
    // This next line will stringify the tasks list
    let tasks = JSON.stringify({
      todayTasks: this.todayTasks,
      futureTasks: this.futureTasks
    });
    localStorage.setItem("tasks", tasks);
  };
  retrieveFromLocalStorage = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      // The following iterations converts a stringified due date to a moment object.
      tasks.todayTasks.forEach(task => {
        if (task.due) task.due = moment(task.due);
      });
      tasks.futureTasks.forEach(task => {
        if (task.due) task.due = moment(task.due);
      });
      this.todayTasks = tasks.todayTasks;
      this.futureTasks = tasks.futureTasks;
    }
  };
  addTask = (title, details, due) => {
    let newTask = { title: title, details: details, due: due };
    if (due && due.isAfter(moment(), "day")) {
      let tasks = this.futureTasks;
      tasks.push(newTask);
      this.futureTasks = tasks;
    } else {
      let tasks = this.todayTasks;
      tasks.push(newTask);
      this.todayTasks = tasks;
    }
    this.updateLocalStorage();
  };
}

decorate(TasksStore, {
  todayTasks: observable,
  futureTasks: observable
});

const tasksStore = new TasksStore();

export default tasksStore;
