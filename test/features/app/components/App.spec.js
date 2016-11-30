import expect from 'expect';
import expectJSX from 'expect-jsx';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import App from '../../../../src/features/app/components/App';

expect.extend(expectJSX);


describe('<App />', () => {
  const renderer = ReactTestUtils.createRenderer();

  it('renders correctly', () => {
    const app = renderer.render(<App />);
    expect(app).toExist();
  });
});
