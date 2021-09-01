import {
  RECEIVE_ROCKETS,
  RECEIVE_ROCKET_RESERVE,
  RECEIVE_ROCKET_RESERVE_CANCELLATION,
} from '../constants/action-types';

const initialState = { rockets: [] };

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ROCKETS: {
      return {
        rockets: action.rockets,
      };
    }
    case RECEIVE_ROCKET_RESERVE: {
      const { id } = action.reservation;
      const newRockets = [];
      const { rockets } = state;
      if (rockets) {
        if (rockets.length > 0) {
          rockets.forEach((r) => {
            if (r.rocket_id === id) {
              const rocket = { ...r, reserved: true };
              newRockets.push(rocket);
            } else {
              newRockets.push(r);
            }
          });
        }
      }
      return {
        rockets: newRockets,
      };
    }
    case RECEIVE_ROCKET_RESERVE_CANCELLATION: {
      const { id } = action.reservation;
      const newRockets = [];
      const { rockets } = state;
      if (rockets) {
        if (rockets.length > 0) {
          rockets.forEach((r) => {
            if (r.rocket_id === id) {
              const {
                // eslint-disable-next-line camelcase
                rocket_id, flickr_images, rocket_name, description,
              } = r;
              const rocket = {
                rocket_id,
                flickr_images,
                rocket_name,
                description,
              };
              newRockets.push(rocket);
            } else {
              newRockets.push(r);
            }
          });
        }
      }
      return {
        rockets: newRockets,
      };
    }
    default:
      return state;
  }
};

export default rocketsReducer;
