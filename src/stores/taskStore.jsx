import { observable, action, decorate } from 'mobx';
import initialData from '../initial-data';

class TaskStore {
    tasks = observable([])

    constructor() {
        this.tasks = initialData.tests;
    }

    updateTask(task) {
        this.tasks[task.id].assignedPersonId = task.assignedPersonId;
        this.tasks[task.id].statusId = task.statusId;
    }

}

decorate(TaskStore, {
    tasks: observable,
    updateTask: action
})

const taskStore = new TaskStore()

export default taskStore;
