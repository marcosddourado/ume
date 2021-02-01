import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import { userReducer } from "./reducers/userReducer";
import { postPageReducer } from "./reducers/postPageReducer";
import { enteringSceneReducer } from "./reducers/entetringSceneReducer";
import { updatedFishingTripsReducer } from "./reducers/updatedFishingTripsReducer";
import { deepLinkingReducer } from "./reducers/deepLinkingReducer";
import { tasksQueueReducer } from "./reducers/tasksQueueReducer";

const store = createStore(
  combineReducers({
    userReducer,
    postPageReducer,
    enteringSceneReducer,
    updatedFishingTripsReducer,
    deepLinkingReducer,
    tasksQueueReducer
  }),
  applyMiddleware(thunk)
);

const persistor = persistStore(store);

export { store, persistor };
