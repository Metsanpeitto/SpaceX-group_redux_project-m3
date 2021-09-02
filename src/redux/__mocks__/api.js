import {
  RECEIVE_ROCKETS,
} from '../constants/action-types';
import rockets from './rockets';

export const receiveRockets = (rockets) => ({
  type: RECEIVE_ROCKETS,
  rockets,
});

export const getRockets = () => (dispatch) => {
  console.log(rockets);
  dispatch(receiveRockets(rockets));
  return rockets;
};
