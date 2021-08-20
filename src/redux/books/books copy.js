const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FILTER_BOOKS = 'bookStore/filter/FILTER_BOOKS';

const initialState = { books: [], booksFiltered: [] };

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const filterBooks = (payload) => ({
  type: FILTER_BOOKS,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
    { const books = [...state.books, action.payload];
      return { ...state, books }; }
    case REMOVE_BOOK: {
      const { books, booksFiltered } = state;
      const newCollection = [];
      if (books.length > 0) {
        books.forEach((b) => {
          if (b.id !== action.payload) {
            newCollection.push(b);
          }
        });
      }
      return {
        books: [...newCollection],
        booksFiltered,
      }; }
    case FILTER_BOOKS: {
      const { books } = state;
      const newCollection = [];
      if (books.length > 0) {
        books.forEach((b) => {
          if (b.category === action.payload) {
            newCollection.push(b);
          }
        });
      }
      return {
        books, booksFiltered: [...newCollection],
      };
    }
    default:
      return state;
  }
};

export default reducer;
