import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Bookcard from './Bookcard';

function Displayer() {
  const { booksReducer } = useSelector((state) => state);
  const { books, booksFiltered } = booksReducer;
  const [booksDisplay, setBooksDisplay] = useState(null);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    if (booksFiltered.length > 0) {
      if (booksFiltered !== booksDisplay) {
        setBooksDisplay(booksFiltered);
      }
    } else if (books !== booksDisplay) {
      setBooksDisplay(books);
    }
  });

  if (booksDisplay) {
    return (
      <div className="books-displayer">
        {booksDisplay.map((b) => (
          <Bookcard key={b.title} data={b} />
        ))}
      </div>
    );
  }
  return <h3>Empty collection</h3>;
}

export default Displayer;
