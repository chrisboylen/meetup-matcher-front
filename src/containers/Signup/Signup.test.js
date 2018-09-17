import React from 'react';
import { shallow } from 'enzyme';
import { Signup, mapStateToProps, mapDispatchToProps } from './Signup';

describe('Signup Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Signup />);
  });

  it('should should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});