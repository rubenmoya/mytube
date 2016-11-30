import expect from 'expect';
import { changeSearchValue, receiveVideos } from '../../../../src/features/app/state/actions';
import * as ActionTypes from '../../../../src/features/app/state/constants';

describe('actions', () => {
  it('creates an action to change the search value', () => {
    const value = 'Foo fighters';
    const expectedAction = {
      type: ActionTypes.CHANGE_SEARCH_VALUE,
      value,
    };

    expect(changeSearchValue(value)).toEqual(expectedAction);
  });

  it('creates an action to receive videos', () => {
    const value = {
      response: { status: 200 },
      data: { items: [{ video: { id: 1 } }, { video: { id: 2 } }] },
    };

    const expectedAction = {
      type: ActionTypes.RECEIVE_VIDEOS,
      status: value.response.status,
      videos: value.data.items,
    };

    expect(receiveVideos(value)).toEqual(expectedAction);
  });
});
