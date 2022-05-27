const INITIAL_STATE = {
  data: [],
  bookItem: {},
};

// eslint-disable-next-line default-param-last
function bookReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_BOOKS_LIST':
      return {
        ...state,
        data: action.booksList,
      };
    case 'ADD_BOOK':
      return {
        ...state,
        book: action.bookItem,
      };
    default:
      return state;
  }
}

export default bookReducer;
