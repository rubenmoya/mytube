import { combineReducers } from 'redux';
import searchReducer from './features/app/state/reducers';

export default combineReducers({
  search: searchReducer,
});
