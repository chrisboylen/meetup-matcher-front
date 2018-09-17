import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';

describe('Header Component', () => {
  let wrapper;
  let mockLogout;

  beforeEach(() => {
    mockLogout = jest.fn();
    wrapper = shallow(<Header logout={mockLogout} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});