import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer from './rockets/rockets';
import dragonsReducer from './dragons/dragons';
import missionsReducer from './missions/missions';
import reservationsReducer from './reservations/reservations';

const reducer = combineReducers({
  reservationsReducer,
  rocketsReducer,
  dragonsReducer,
  missionsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
