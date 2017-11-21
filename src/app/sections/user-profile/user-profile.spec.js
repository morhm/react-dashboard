import React from 'react';
import TestUtils from 'react-addons-test-utils';
import UserProfile from './user-profile';

describe('UserProfile component', () => {
  it('should render default text', () => {
    const userProfile = TestUtils.renderIntoDocument(<UserProfile/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(user-profile, 'h2');
    expect(h2.textContent).toEqual('My brand new component!');
  });
});
