import {
  RECEIVE_MISSIONS,
  RECEIVE_MISSION_RESERVE,
  RECEIVE_MISSION_RESERVE_CANCELLATION,
} from '../constants/action-types';

const initialState = { missions: [] };

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_MISSIONS: {
      return {
        missions: action.missions,
      };
    }
    case RECEIVE_MISSION_RESERVE: {
      const { id } = action.reservation;
      const newMissions = [];
      const { missions } = state;
      if (missions) {
        if (missions.length > 0) {
          missions.forEach((m) => {
            if (m.id === id) {
              const mission = { ...m, reserved: true };
              newMissions.push(mission);
            } else {
              newMissions.push(m);
            }
          });
        }
      }
      return {
        missions: newMissions,
      };
    }
    case RECEIVE_MISSION_RESERVE_CANCELLATION: {
      const { id } = action.reservation;
      const newMissions = [];
      const { missions } = state;
      if (missions) {
        if (missions.length > 0) {
          missions.forEach((m) => {
            if (m.id === id) {
              const { id, name, description } = m;
              // eslint-disable-next-line camelcase
              const mission = { id, name, description };
              newMissions.push(mission);
            } else {
              newMissions.push(m);
            }
          });
        }
      }
      return {
        missions: newMissions,
      };
    }
    default:
      return state;
  }
};

export default missionsReducer;
