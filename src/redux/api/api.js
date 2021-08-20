import library from '../../api/api';
import { RECEIVE_BOOKS } from '../constants/action-types';

export const receiveBooks = (books) => ({
  type: RECEIVE_BOOKS,
  books,
});

export const getBooks = () => (dispatch) => {
  library.getBooks().then((books) => {
    dispatch(receiveBooks(books));
    return books;
  });
};

export const addBook = (book) => (dispatch) => {
  library.addBook(book).then((response) => {
    if (response === 'Created') {
      dispatch(getBooks());
    }
    return response;
  });
};

export const removeBook = (book) => (dispatch) => {
  library.removeBook(book).then((response) => {
    if (response === 'The book was deleted successfully!') {
      dispatch(getBooks());
    }
    return response;
  });
};
