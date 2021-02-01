import { UserEditData } from "../../interfaces";

interface State {
  user?: UserEditData;
  loading: boolean;
}

const initialState: State = {
  user: undefined,
  loading: true
};

export const userReducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, user: action.user, loading: false };
    case "REMOVE_USER":
      return { ...state, ...initialState, loading: false };
    default:
      return state;
  }
};

export const addUser = (user: UserEditData) => ({ type: "ADD_USER", user });

export const removeUser = () => ({ type: "REMOVE_USER" });

export const userSelector = (state: any) => (state.userReducer as State).user;
