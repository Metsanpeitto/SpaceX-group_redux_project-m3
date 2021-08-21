import {
  RECEIVE_ROCKETS,
} from '../constants/action-types';

const initialState = { rockets: [] };

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ROCKETS: {
      return {
        rockets: action.rockets,
        state,
      };
    }
    default:
      return state;
  }
};

export default rocketsReducer;
