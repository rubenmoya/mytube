import expect from 'expect';
import expectJSX from 'expect-jsx';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Video from '../../../../src/features/app/components/Video';

expect.extend(expectJSX);


describe('<Video />', () => {
  const renderer = ReactTestUtils.createRenderer();
  const props = {
    snippet: {
      description: 'Just a Metallica song',
      thumbnails: { medium: { url: 'http://randomimage.com' } },
      title: 'Metallica - Nothing Else Matters',
    },
    id: { videoId: 42 },
  };

  it('should render correctly', () => {
    const video = renderer.render(<Video video={props} />);
    expect(video).toExist();
  });
});
