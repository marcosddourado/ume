import moment from "moment";
import { Actions } from "react-native-router-flux";

interface State {
  time: number;
  scene: string;
  sceneProps?: any;
}

const initialState: State = {
  time: 0,
  scene: ""
};

export const enteringSceneReducer = (
  state = initialState,
  action: any
): State => {
  switch (action.type) {
    case "SET_NEW_SCENE":
      return {
        ...state,
        scene: Actions.currentScene,
        time: moment().valueOf(),
        sceneProps: action.sceneProps
      };
    default:
      return state;
  }
};

export const setNewScene = (sceneProps?: any) => ({ type: "SET_NEW_SCENE", sceneProps });

export const enteringSceneSelector = (state: any) => (state.enteringSceneReducer as State);
