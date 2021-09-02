/* eslint-disable camelcase */
import reducer from './rockets';
import '@testing-library/jest-dom';
import { receiveRockets } from '../__mocks__/api';
import rockets from '../__mocks__/rockets';

const initialState = { rockets: [] };

test('returns the initial state', () => {
  const stateNew = reducer(undefined, {});
  expect(stateNew).toEqual(initialState);
});

test('returns the received rockets', () => {
  const stateNew = reducer(initialState, receiveRockets(rockets));
  expect(stateNew).toEqual({ rockets });
});
