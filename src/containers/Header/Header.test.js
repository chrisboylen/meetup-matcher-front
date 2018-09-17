import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';

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
  describe('mapStateToProps', () => {
    it('return an object of user', () => {
      const mockState = {user: {name: 'Tim'}, logout: 'no'};
      const expected = {user: {name: 'Tim'}};
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
});