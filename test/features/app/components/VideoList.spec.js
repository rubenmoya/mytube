import expect from 'expect';
import expectJSX from 'expect-jsx';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import VideoList from '../../../../src/features/app/components/VideoList';

expect.extend(expectJSX);


describe('<VideoList />', () => {
  const renderer = ReactTestUtils.createRenderer();
  const props = [{
    snippet: {
      description: 'Just a Metallica song',
      thumbnails: { medium: { url: 'http://randomimage.com' } },
      title: 'Metallica - Nothing Else Matters',
    },
    id: { videoId: 42 },
  }];

  it('should render correctly', () => {
    const videoList = renderer.render(<VideoList videos={props} />);
    expect(videoList).toExist();
  });
});
