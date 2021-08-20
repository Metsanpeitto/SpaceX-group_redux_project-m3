import React from 'react';
import Adder from '../components/Adder';
import Displayer from '../components/Displayer';
import Filter from '../components/Filter';

const Books = () => (
  <div className="books">
    <Filter />
    <Displayer />
    <Adder />
  </div>
);
export default Books;
