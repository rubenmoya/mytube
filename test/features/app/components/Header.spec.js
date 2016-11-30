import expect from 'expect';
import expectJSX from 'expect-jsx';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Header from '../../../../src/features/app/components/Header';

expect.extend(expectJSX);

describe('<Header />', () => {
  const renderer = ReactTestUtils.createRenderer();

  it('should render correctly', () => {
    const video = renderer.render(<Header onChange={() => true} />);
    expect(video).toExist();
  });
});
