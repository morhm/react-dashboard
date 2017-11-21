import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Sidebar from './sidebar';

describe('Sidebar component', () => {
  it('should render default text', () => {
    const sidebar = TestUtils.renderIntoDocument(<Sidebar/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(sidebar, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
