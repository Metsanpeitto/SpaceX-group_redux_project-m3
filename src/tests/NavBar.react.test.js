import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Link } from 'react-router-dom';

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
