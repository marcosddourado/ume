interface State {
  updatedFishingTrips: number;
}

const initialState: State = {
  updatedFishingTrips: 0
};

export const updatedFishingTripsReducer = (
  state = initialState,
  action: any
): State => {
  switch (action.type) {
    case "SET_UPDATED_FISHING_TRIPS":
      return { ...state, updatedFishingTrips: action.updatedFishingTrips };
    default:
      return state;
  }
};

export const setUpdatedFishingTrips = (updatedFishingTrips: number) => ({ type: "SET_UPDATED_FISHING_TRIPS", updatedFishingTrips });

export const updatedFishingTripsSelector = (state: any) => {
  const { updatedFishingTripsReducer } = state;
  return (updatedFishingTripsReducer as State).updatedFishingTrips;
};
