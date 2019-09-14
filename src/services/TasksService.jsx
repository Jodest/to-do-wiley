export default class TaskService {
  getTasks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(window.localStorage.tasks ? JSON.parse(window.localStorage.tasks) : []);
        }
      }, 700);
    });
  }

  postTasks(tasks) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something bad happened'));
        } else {
          window.localStorage.tasks = JSON.stringify(tasks);
          resolve({
            data: tasks,
            message: 'Success',
          });
        }
      }, 700);
    });
  }
}