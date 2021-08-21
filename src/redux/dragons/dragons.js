import { RECEIVE_DRAGONS } from '../constants/action-types';

const initialState = { dragons: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DRAGONS: {
      return {
        dragons: action.reservations,
        state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
