// Import actions
import { CREATE_NEW_TASK, TOGGLE_TASK} from '../Actions/index';

export const initialState = {
    tasks: [
        { value: 'Feed Ibiza', completed: false },
        { value: 'Sweep the yard', completed: false },
        { value: 'Cook Dinner', completed: false },
    ]
}

export const taskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NEW_TASK:
            const createTask = {
                id: Date.now(),
                value: action.payload, 
                completed: false
            };
            return {
                ...state,
                tasks: {...state.tasks, createTask}
            };
        default:
            return state;
    }
}
