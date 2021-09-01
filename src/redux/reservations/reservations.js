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
      let newRockets = [];
      let newDragons = [];
      let newMissions = [];

      if (target === 'rockets') {
        rockets.forEach((name) => {
          if (name !== id) {
            newRockets.push(name);
          }
        });
      } else {
        newRockets = rockets;
      }
      if (target === 'dragons') {
        dragons.forEach((name) => {
          if (name !== id) {
            newDragons.push(name);
          }
        });
      } else {
        newDragons = dragons;
      }

      if (target === 'missions') {
        missions.forEach((name) => {
          if (name !== id) {
            newMissions.push(name);
          }
        });
      } else {
        newMissions = missions;
      }

      const reservations = { rockets: newRockets, dragons: newDragons, missions: newMissions };
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
