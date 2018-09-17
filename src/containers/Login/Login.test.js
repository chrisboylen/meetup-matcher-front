import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapStateToProps, mapDispatchToProps } from './Login';
import { loginUser, userError } from '../../actions/index';

describe('Login Component', () => {
  let wrapper;
  let mockEvent

  beforeEach(() => {
    wrapper = shallow(<Login />);
    mockEvent = {target: {value: 'yes'}};
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should set state when invoked', () => {
      mockEvent = {target: {name: 'email', value: 't@gmail.com'}};
      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state().email).toBe('t@gmail.com');

      mockEvent = {target: {name: 'password', value: 'god'}};
      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state().password).toBe('god');
    });
    it('should invoke handleChange when email is changed', () => {
      const spy = spyOn(wrapper.instance(), 'handleChange');
      wrapper.instance().forceUpdate();
      wrapper.find('.email-input').simulate('change', mockEvent);

      expect(spy).toHaveBeenCalled();
    });
    it('should invoke handleChange when password is changed', () => {
      const spy = spyOn(wrapper.instance(), 'handleChange');
      wrapper.instance().forceUpdate();
      wrapper.find('.password-input').simulate('change', mockEvent);

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('mapDispatchToProps', () => {
    it('should dispatch loginUser when login is invoked', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = loginUser();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.login();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
    it('should dispatch userError when userError is invoked', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = userError();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.userError();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
