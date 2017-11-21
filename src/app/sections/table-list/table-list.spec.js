import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TableList from './table-list';

describe('TableList component', () => {
  it('should render default text', () => {
    const tableList = TestUtils.renderIntoDocument(<TableList/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(table-list, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
