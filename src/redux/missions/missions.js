import { RECEIVE_MISSIONS } from '../constants/action-types';

const initialState = { missions: [] };

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_MISSIONS: {
      return {
        missions: action.missions,
        state,
      };
    }
    default:
      return state;
  }
};

export default missionsReducer;
