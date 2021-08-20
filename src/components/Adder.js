import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/api/api';

function Adder() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Science fiction');

  const submitBookToStore = () => {
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
      author,
    };

    dispatch(addBook(newBook));
  };

  return (
    <div className="adder">
      <h2>ADD NEW BOOK</h2>
      <div className="add-form">
        <input
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="input-title"
          id="input-title"
        />
        <input
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          name="input-author"
          id="input-author"
        />
        <select
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
          id="input-category"
          name="input-category"
        >
          <option value="science-fiction">Science Fiction</option>
          <option value="economy">Economy</option>
          <option value="action">Action</option>
        </select>
        <button type="submit" onClick={submitBookToStore}>
          ADD BOOK
        </button>
      </div>
    </div>
  );
}

export default Adder;
