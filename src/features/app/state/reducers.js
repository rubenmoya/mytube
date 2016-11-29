import { combineReducers } from 'redux';
import * as ActionTypes from './constants';

const value = (state = '', action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_SEARCH_VALUE:
      return action.value;
    default:
      return state;
  }
};

const videos = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_VIDEOS:
      return action.videos;
    default:
      return state;
  }
};

export default combineReducers({
  value,
  videos,
});
