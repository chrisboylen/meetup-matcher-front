import React from 'react';
import { shallow } from 'enzyme';
import { Questions, mapStateToProps, mapDispatchToProps } from './Questions';

describe('Questions', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Questions />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});