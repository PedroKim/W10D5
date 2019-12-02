import {RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP} from "../actions/step_actions";

const initialState = {
  1: {
    todo_id: 1,
    title: 'walk to the store',
    done: false,
    id: 1
  },
  2: {
    todo_id: 1,
    title: 'purchase milk',
    done: true
    id: 2
  },
};

const steps_reducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default steps_reducer;