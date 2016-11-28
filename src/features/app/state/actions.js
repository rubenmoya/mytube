import * as ActionTypes from './constants';

// eslint-disable-next-line import/prefer-default-export
export const changeSearchValue = value => ({
  type: ActionTypes.CHANGE_SEARCH_VALUE,
  value,
});
