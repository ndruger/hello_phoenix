import Settings from './Settings';
import React from 'react/addons';
import chai from 'chai';

const expect = chai.expect;
const TestUtils = React.addons.TestUtils;

describe('Settings', () => {
  it('renders "Settings"', () => {
    const settings = TestUtils.renderIntoDocument(
      <Settings/>
    );
    const content = TestUtils.findRenderedDOMComponentWithTag(
      settings, 'div'
    );
    expect(content.getDOMNode().textContent).to.equal('Settings');
  });
});
