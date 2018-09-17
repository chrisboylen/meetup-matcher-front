import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import { logoutUser } from '../../actions';

describe('Header Component', () => {
  let wrapper;
  let mockLogout;
  let mockLogOutFirebase;

  beforeEach(() => {
    mockLogout = jest.fn();
    mockLogOutFirebase = jest.fn();
    wrapper = shallow(
      <Header 
        logout={mockLogout} 
        logOutFirebase={mockLogOutFirebase}
      />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleLogout', () => {
    it('should call logout when invoked', () => {
      console.log(wrapper.debug())
      wrapper.instance().handleLogout()
      expect(mockLogout).toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    it('return an object of user', () => {
      const mockState = {user: {name: 'Tim'}, logout: 'no'};
      const expected = {user: {name: 'Tim'}};
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should dispatch logoutUser when logout is invoked', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = logoutUser()
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.logout();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});