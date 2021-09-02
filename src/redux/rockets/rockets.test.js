/* eslint-disable camelcase */
import reducer from './rockets';
// eslint-disable-next-line no-unused-vars
import { receiveRockets } from '../__mocks__/api';
import rockets from '../__mocks__/rockets';

test('returns the initial state', () => {
  const initialState = { rockets: [] };
  const stateNew = reducer(undefined, {});
  expect(stateNew).toEqual(initialState);
});

test('returns the received rockets', () => {
  const initialState = { rockets: [] };

  const stateNew = reducer(initialState, receiveRockets());
  expect(stateNew).toEqual({
    rockets,
  });
});
