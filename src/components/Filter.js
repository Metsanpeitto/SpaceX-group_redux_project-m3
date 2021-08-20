import React from 'react';
import { useDispatch } from 'react-redux';
import { filterBooks } from '../redux/books/books';

function Filter() {
  const dispatch = useDispatch();
  const filter = (e) => {
    dispatch(filterBooks(e.target.value));
  };

  return (
    <select
      placeholder="Category"
      onChange={filter}
      id="input-category"
      name="input-category"
    >
      <option value="science-fiction">Science Fiction</option>
      <option value="economy">Economy</option>
      <option value="action">Action</option>
    </select>
  );
}

export default Filter;
