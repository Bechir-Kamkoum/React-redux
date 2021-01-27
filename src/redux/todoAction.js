import { ADDTASK, EDITTASK, COMPLETETASK, DELETETASK, CANCEL, FILTERDONE} from "../redux/actionType";

export function addTask(task) {
    return {
        type: ADDTASK,
        payload: task
    }
}

export function editTask(task) {
    return {
        type: EDITTASK,
        payload: task
    }
}

export function completeTask(taskId) {
    return {
        type: COMPLETETASK,
        payload: taskId
    }
}

export function deleteTask(taskId) {
    return {
        type: DELETETASK,
        payload: taskId
    }
}

export function cancel(taskId) {
    return {
        type: CANCEL,
        payload: taskId
    }
}
export function filterDone(taskId) {
    return {
        type: FILTERDONE,
        payload: taskId
    }
}