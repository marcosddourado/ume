import { Collection } from "../../interfaces";

interface State {
  item?: any;
  entity?: Collection;
}

const initialState: State = {};

export const deepLinkingReducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case "ADD_DEEPLINKING_ITEM":
      return {
        ...state,
        item: action.item,
        entity: action.entity
      };
    case "REMOVE_DEEPLINKING_ITEM":
      return { ...state, item: undefined, entity: undefined };
    default:
      return state;
  }
};

export const addDeepLinkingItem = (
  item: any,
  entity: Collection
) => ({ type: "ADD_DEEPLINKING_ITEM", item, entity });

export const removeDeepLinkingItem = () => ({ type: "REMOVE_DEEPLINKING_ITEM" });

export const deepLinkingSelector = (state: any) => state.deepLinkingReducer as State;
