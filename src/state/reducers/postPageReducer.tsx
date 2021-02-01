interface State {
  userIsOnPostsPage: boolean;
}

const initialState: State = {
  userIsOnPostsPage: false
};

export const postPageReducer = (
  state = initialState,
  action: any
): State => {
  switch (action.type) {
    case "USER_IS_ON_POST_PAGE":
      return { ...state, userIsOnPostsPage: action.userIsOnPostsPage };
    default:
      return state;
  }
};

export const setIfUserIsOnPostPage = (userIsOnPostsPage: boolean) => ({ type: "USER_IS_ON_POST_PAGE", userIsOnPostsPage });

export const verifyIfUserIsOnPostsPageSelector = (state: any) => {
  const { postPageReducer } = state;
  return (postPageReducer as State).userIsOnPostsPage;
};
