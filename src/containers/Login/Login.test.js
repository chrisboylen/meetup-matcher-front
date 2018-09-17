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
});
