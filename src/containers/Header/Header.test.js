import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapDispatchToProps } from './Header';
import * as firebase from 'firebase';
import { logoutUser } from '../../actions';

describe('Header Component', () => {
  let wrapper;
  let mockLogout;
  let mockLogOutFirebase;
  let mockHistory;

  beforeEach(() => {
    mockLogout = jest.fn();
    mockLogOutFirebase = jest.fn();
    mockHistory = { push: jest.fn() };
    wrapper = shallow(
      <Header 
        logout={mockLogout} 
        logOutFirebase={mockLogOutFirebase}
        history={mockHistory}
      />
    );
  });

  it('should match snapshot', () => {
    firebase.auth.currentUser = jest.fn().mockReturnValue({
      currentUser: true
    });

    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot with no user', () => {
    firebase.auth.currentUser = jest.fn().mockReturnValue({
      currentUser: false
    });

    expect(wrapper).toMatchSnapshot();
  });
  describe('handleLogout', () => {
    it('should call logout when invoked', async () => {
      await wrapper.instance().handleLogout();

      expect(mockLogout).toHaveBeenCalled();
    });
  });

  describe('mapDispatchToProps', () => {
    it('should dispatch logoutUser when logout is invoked', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = logoutUser();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.logout();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});