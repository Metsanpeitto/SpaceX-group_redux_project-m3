import {
  ADD_RESERVATION,
  REMOVE_RESERVATION,
  RECEIVE_RESERVATIONS,
} from '../constants/action-types';

const initialState = {
  reservations: { rockets: [], dragons: [], missions: [] },
};

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION: {
      const { id, target } = action.reservation;
      const { rockets, dragons, missions } = state.reservations;
      if (target === 'rockets') {
        let present = null;
        rockets.forEach((name) => {
          if (name === id) {
            present = true;
          }
        });
        if (!present) {
          rockets.push(id);
        }
      }
      if (target === 'dragons') {
        let present = null;
        dragons.forEach((name) => {
          if (name === id) {
            present = true;
          }
        });
        if (!present) {
          dragons.push(id);
        }
      }

      if (target === 'missions') {
        let present = null;
        missions.forEach((name) => {
          if (name === id) {
            present = true;
          }
        });
        if (!present) {
          missions.push(id);
        }
      }

      const reservations = { rockets, dragons, missions };
      return {
        reservations,
      };
    }

    case REMOVE_RESERVATION: {
      const { id, target } = action.reservation;
      const { rockets, dragons, missions } = state.reservations;
      if (target === 'rockets') {
        const newRockets = [];
        rockets.forEach((name) => {
          if (name !== id) {
            newRockets.push(name);
          }
        });
      }
      if (target === 'dragons') {
        const newDragons = [];
        dragons.forEach((name) => {
          if (name !== id) {
            newDragons.push(name);
          }
        });
      }

      if (target === 'missions') {
        const newMissions = [];
        missions.forEach((name) => {
          if (name !== id) {
            newMissions.push(name);
          }
        });
      }

      const reservations = { rockets, dragons, missions };
      return {
        reservations,
      };
    }
    case RECEIVE_RESERVATIONS: {
      return {
        reservations: action.reservations,
      };
    }
    default:
      return state;
  }
};

export default reservationsReducer;
