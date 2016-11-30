import expect from 'expect';
import * as ActionTypes from '../../../../src/features/app/state/constants';
import videosReducer from '../../../../src/features/app/state/reducers';

describe('videos reducer', () => {
  it('returns the initial state', () => {
    expect(videosReducer(undefined, {})).toEqual({ value: '', videos: [] });
  });

  it('handles CHANGE_SEARCH_VALUE', () => {
    const action = {
      type: ActionTypes.CHANGE_SEARCH_VALUE,
      value: 'Iron Maiden',
    };
    expect(videosReducer({}, action)).toEqual({ value: 'Iron Maiden', videos: [] });
  });

  it('handles RECEIVE_VIDEOS', () => {
    const action = {
      type: ActionTypes.RECEIVE_VIDEOS,
      videos: [{ video: 1 }, { video: 2 }],
    };
    expect(videosReducer({}, action)).toEqual({ value: '', videos: [{ video: 1 }, { video: 2 }] });
  });
});
