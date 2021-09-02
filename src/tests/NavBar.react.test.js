import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('renders the navigation bar', () => {
  render(
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
    </Router>,
  );
  const linkElement = screen.getByText(/Rockets/i);
  expect(linkElement).toBeInTheDocument();
});
/*
it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router basename={process.env.PUBLIC_URL}>
        <Link to="/" active="true" exact="true">
          Rockets
        </Link>
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
*/
