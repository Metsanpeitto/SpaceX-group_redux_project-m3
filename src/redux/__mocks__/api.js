import {
  RECEIVE_ROCKETS,
} from '../constants/action-types';
import rockets from './rockets';

export const receiveRockets = (rockets) => ({
  type: RECEIVE_ROCKETS,
  rockets,
});

export const getRockets = () => (dispatch) => {
  dispatch(receiveRockets(rockets));
  return rockets;
};
