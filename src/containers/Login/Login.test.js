import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapStateToProps, mapDispatchToProps } from './Login';
import { login, userError } from '../../actions/index';

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
  });
});
