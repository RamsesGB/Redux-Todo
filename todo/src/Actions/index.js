export const CREATE_NEW_TASK = 'CREATE_NEW_TASK';
export const createNewTask = newTask => {
    console.log(newTask);
    return {
        type: CREATE_NEW_TASK,
        payload: newTask
    };
}

export const TOGGLE_TASK = 'TOGGLE_TASK';
export const toggleTask = index => {
    console.log(index);
    return {
        type: TOGGLE_TASK,
        payload: index
    };
}