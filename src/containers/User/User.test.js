import React from 'react';
import { shallow } from 'enzyme';
import { User, mapStateToProps, mapDispatchToProps } from './User';
import { logoutUser } from '../../actions/index';

describe('User Component', () => {
  it('should match snapshot when user has questions', () => {
    const mockUser = {questions: 'yes'}
    const wrapper = shallow(<User user={mockUser} />);

    expect(wrapper).toMatchSnapshot()
  });
  it('should match snapshot when user has no questions', () => {
    const mockUser = {questions: ''}
    const wrapper = shallow(<User user={mockUser} />);

    expect(wrapper).toMatchSnapshot()
  });

  describe('mapStateToProps', () => {
    it('should return a user object', () => {
      const mockState = {user: {name: 'tim'}, logoutUser: 'yes'};
      const expected = {user: {name: 'tim'}};
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
  describe('mapDispatchToProps', () => {
    it('should dispatch logoutUser when logoutUser is invoked', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = logoutUser();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.logoutUser();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});