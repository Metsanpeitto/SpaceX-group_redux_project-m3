import api from '../../api/api';

import {
  RECEIVE_ROCKETS,
  RECEIVE_DRAGONS,
  RECEIVE_MISSIONS,
  ADD_RESERVATION,
  REMOVE_RESERVATION,
  RECEIVE_RESERVATIONS,
  RECEIVE_ROCKET_RESERVE,
  RECEIVE_DRAGON_RESERVE,
  RECEIVE_MISSION_RESERVE,
  RECEIVE_ROCKET_RESERVE_CANCELLATION,
  RECEIVE_DRAGON_RESERVE_CANCELLATION,
  RECEIVE_MISSION_RESERVE_CANCELLATION,
} from '../constants/action-types';

export const receiveRockets = (rockets) => ({
  type: RECEIVE_ROCKETS,
  rockets,
});

export const getRockets = () => (dispatch) => {
  api.getRockets().then((rockets) => {
    dispatch(receiveRockets(rockets));
    return rockets;
  });
};

export const receiveDragons = (dragons) => ({
  type: RECEIVE_DRAGONS,
  dragons,
});

export const getDragons = () => (dispatch) => {
  api.getDragons().then((dragons) => {
    dispatch(receiveDragons(dragons));
    return dragons;
  });
};

export const receiveMissions = (missions) => ({
  type: RECEIVE_MISSIONS,
  missions,
});

export const getMissions = () => (dispatch) => {
  api.getMissions().then((missions) => {
    dispatch(receiveMissions(missions));
    return missions;
  });
};

export const receiveReservations = (reservations) => ({
  type: RECEIVE_RESERVATIONS,
  reservations,
});

export const getReservations = (reservation) => (dispatch) => {
  dispatch(receiveReservations(reservation));
};

export const removeReserve = (reservation) => ({
  type: REMOVE_RESERVATION,
  reservation,
});

export const addReserve = (reservation) => ({
  type: ADD_RESERVATION,
  reservation,
});

export const receiveRocketReserve = (reservation) => ({
  type: RECEIVE_ROCKET_RESERVE,
  reservation,
});

export const receiveRocketReserveCancellation = (reservation) => ({
  type: RECEIVE_ROCKET_RESERVE_CANCELLATION,
  reservation,
});

export const receiveDragonReserve = (reservation) => ({
  type: RECEIVE_DRAGON_RESERVE,
  reservation,
});

export const receiveDragonReserveCancellation = (reservation) => ({
  type: RECEIVE_DRAGON_RESERVE_CANCELLATION,
  reservation,
});

export const receiveMissionReserve = (reservation) => ({
  type: RECEIVE_MISSION_RESERVE,
  reservation,
});

export const receiveMissionReserveCancellation = (reservation) => ({
  type: RECEIVE_MISSION_RESERVE_CANCELLATION,
  reservation,
});

export const addReservation = (reservation) => (dispatch) => {
  dispatch(addReserve(reservation));
  const { target } = reservation;
  if (target === 'rockets') {
    dispatch(receiveRocketReserve(reservation));
  }
  if (target === 'dragons') {
    dispatch(receiveDragonReserve(reservation));
  }
  if (target === 'missions') {
    dispatch(receiveMissionReserve(reservation));
  }
};

export const removeReservation = (reservation) => (dispatch) => {
  dispatch(removeReserve(reservation));
  dispatch(receiveRocketReserveCancellation(reservation));

  const { target } = reservation;
  if (target === 'rockets') {
    dispatch(receiveRocketReserveCancellation(reservation));
  }
  if (target === 'dragons') {
    dispatch(receiveDragonReserveCancellation(reservation));
  }
  if (target === 'missions') {
    dispatch(receiveMissionReserveCancellation(reservation));
  }
};
