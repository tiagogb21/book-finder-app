const INITIAL_STATE = {
  data: [],
};

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return { ...state, data: [...state.data, action.title] };
    default:
      return state;
  }
};

export default bookReducer;
