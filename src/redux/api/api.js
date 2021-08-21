import {
  RECEIVE_ROCKETS,
  RECEIVE_DRAGONS,
  RECEIVE_MISSIONS,
  ADD_RESERVATION,
  REMOVE_RESERVATION,
  RECEIVE_RESERVATIONS,
} from '../constants/action-types';

export const receiveRockets = (rockets) => ({
  type: RECEIVE_ROCKETS,
  rockets,
});

export const receiveDragons = (dragons) => ({
  type: RECEIVE_DRAGONS,
  dragons,
});

export const receiveMissions = (missions) => ({
  type: RECEIVE_MISSIONS,
  missions,
});

export const receiveReservations = (reservations) => ({
  type: RECEIVE_RESERVATIONS,
  reservations,
});

export const removeReservation = (reservations) => ({
  type: REMOVE_RESERVATION,
  reservations,
});

export const addReservation = (reservations) => ({
  type: ADD_RESERVATION,
  reservations,
});
