import tasksQueue from "../../utils/tasksQueue";

interface State {
  tasksQueue: any;
}

const initialState: State = {
  tasksQueue
};

export const tasksQueueReducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case "GET_TASKS_QUEUE":
      return { ...state, tasksQueue };
    default:
      return state;
  }
};

export const tasksQueueSelector = (state: any) => (state.tasksQueueReducer as State).tasksQueue;
