fjest.dontMock('../Settings');

const Settings = require('../Settings');
const React = require('react/addons');

const TestUtils = React.addons.TestUtils;

describe('Settings', () => {
  it('renders "Settings"', () => {
    const settings = TestUtils.renderIntoDocument(
      <Settings/>
    );
    const content = TestUtils.findRenderedDOMComponentWithTag(
      settings, 'div'
    );
    expect(content.getDOMNode().textContent).toBe('Settings');
  });
});
