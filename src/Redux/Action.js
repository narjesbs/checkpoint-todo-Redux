import { ADD_TASK,EDIT_TASK,DELETE_TASK,COMPLETE_TASK } from "./Types";

export const addTask = (newTask) => {
    return {
        type: ADD_TASK,
        payload: newTask
    }
}

export const editTask = (id,newTodo) => {
    return {
        type: EDIT_TASK,
        id: id,
        newTodo: newTodo
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}

export const completeTask = (id) => {
    return {
        type: COMPLETE_TASK,
        payload: id
    }
}