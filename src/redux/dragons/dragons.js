import {
  RECEIVE_DRAGONS,
  RECEIVE_DRAGON_RESERVE,
  RECEIVE_DRAGON_RESERVE_CANCELATION,
} from '../constants/action-types';

const initialState = { dragons: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DRAGONS: {
      return {
        dragons: action.dragons,
      };
    }
    case RECEIVE_DRAGON_RESERVE: {
      const { id } = action.reservation;
      const newDragons = [];
      const { dragons } = state;
      if (dragons) {
        if (dragons.length > 0) {
          dragons.forEach((d) => {
            if (d.rocket_id === id) {
              const dragons = { ...d, reserved: true };
              newDragons.push(dragons);
            } else {
              newDragons.push(d);
            }
          });
        }
      }
      return {
        dragons: newDragons,
      };
    }
    case RECEIVE_DRAGON_RESERVE_CANCELATION: {
      const { id } = action.reservation;
      const newDragons = [];
      const { dragons } = state;
      if (dragons) {
        if (dragons.length > 0) {
          dragons.forEach((r) => {
            if (r.rocket_id === id) {
              const {
                // eslint-disable-next-line camelcase
                rocket_id, flickr_images, rocket_name, description,
              } = r;
              const dragon = {
                rocket_id, flickr_images, rocket_name, description,
              };
              newDragons.push(dragon);
            } else {
              newDragons.push(r);
            }
          });
        }
      }
      return {
        dragons: newDragons,
      };
    }
    default:
      return state;
  }
};

export default reducer;
