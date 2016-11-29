import { apiRequest } from '../../api/actions';
import * as ActionTypes from './constants';

export const changeSearchValue = value => ({
  type: ActionTypes.CHANGE_SEARCH_VALUE,
  value,
});

export const receiveVideos = ({ response, data }) => ({
  type: ActionTypes.RECEIVE_VIDEOS,
  status: response.status,
  videos: data.items,
});

export const searchVideos = params => apiRequest(`/search?part=id,snippet&q=${params.q}&type=video`, {
  actions: [receiveVideos],
  params,
});
