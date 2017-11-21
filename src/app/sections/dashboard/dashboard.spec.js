import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Dashboard from './dashboard';

describe('Dashboard component', () => {
  it('should render default text', () => {
    const dashboard = TestUtils.renderIntoDocument(<Dashboard/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(dashboard, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
