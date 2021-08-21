import { ADD_RESERVATION, REMOVE_RESERVATION, RECEIVE_RESERVATIONS } from '../constants/action-types';

const initialState = { reservations: [] };

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION: {
      return {
        reservation: action.reservation,
        state,
      };
    }
    case REMOVE_RESERVATION: {
      return {
        reservation: action.reservation,
        state,
      };
    }
    case RECEIVE_RESERVATIONS: {
      return {
        reservations: action.reservations,
        state,
      };
    }
    default:
      return state;
  }
};

export default reservationsReducer;
