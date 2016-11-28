import * as ActionTypes from './constants';

const searchBar = (state = { value: '' }, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_SEARCH_VALUE:
      return Object.assign({}, state, { value: action.value });
    default:
      return state;
  }
};

export default searchBar;
