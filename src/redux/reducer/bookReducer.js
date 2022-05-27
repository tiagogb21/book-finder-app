const INITIAL_STATE = {
  data: [],
  book: {},
};

function bookReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_BOOKS_LIST":
      return {
        ...state,
        data: [...action.booksList],
      };
    case "ADD_BOOK":
      return {
        ...state,
        book: { ...action.book },
      };
    default:
      return state;
  }
}

export default bookReducer;
