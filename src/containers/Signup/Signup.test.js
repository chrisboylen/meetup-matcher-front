import React from 'react';
import { shallow } from 'enzyme';
import { Signup, mapDispatchToProps } from './Signup';
import { loginUser, userError } from '../../actions';

/*global spyOn*/

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
    it('should invoke handleChange when username is changed', () => {
      const spy = spyOn(wrapper.instance(), 'handleChange');
      wrapper.instance().forceUpdate();
      wrapper.find('.username-input-signup').simulate('change', mockEvent);

      expect(spy).toHaveBeenCalled();
    });
    it('should invoke handleChange when email is changed', () => {
      const spy = spyOn(wrapper.instance(), 'handleChange');
      wrapper.instance().forceUpdate();
      wrapper.find('.email-input-signup').simulate('change', mockEvent);

      expect(spy).toHaveBeenCalled();
    });
    it('should invoke handleChange when password is changed', () => {
      const spy = spyOn(wrapper.instance(), 'handleChange');
      wrapper.instance().forceUpdate();
      wrapper.find('.password-input-signup').simulate('change', mockEvent);

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('handleSubmit', () => {
    let mockUser;
    let mockHistory;
    let mockLogin;
    let mockUserName;
    let mockUpdatedUser;

    beforeEach(() => {
      mockUser = {
        username: 'tim',
        email: 't@gmail.com',
        userId: '1',
        password: 'password'
      };
      mockHistory = {push: jest.fn()};
      mockLogin = jest.fn();
      mockUserName = 'tim';
      mockUpdatedUser = {...mockUser};
      mockEvent = {preventDefault: jest.fn()};
      wrapper = shallow(
        <Signup
          user={mockUser}
          history={mockHistory}
          login={mockLogin}
          username={mockUserName}
          updatedUser={mockUpdatedUser}
        />
      );
    });

    it.skip('should invoke login when handleSubmit is called', async () => {
      await wrapper.instance().handleSubmit(mockEvent);

      expect(mockLogin).toHaveBeenCalled();
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