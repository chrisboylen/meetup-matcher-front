import React from 'react';
import { shallow } from 'enzyme';
import { Signup, mapStateToProps, mapDispatchToProps } from './Signup';

describe('Signup Component', () => {
  let wrapper;
  let mockEvent;

  beforeEach(() => {
    wrapper = shallow(<Signup />);
    mockEvent = {target: {value: 'yes'}};
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should set state when invoked', () => {
      mockEvent = {target: {name: 'username', value: 'tim'}};
      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state().username).toBe('tim');

      mockEvent = {target: {name: 'email', value: 't@gmail.com'}};
      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state().email).toBe('t@gmail.com');

      mockEvent = {target: {name: 'password', value: 'bingo'}};
      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state().password).toBe('bingo');
    });
  });
});