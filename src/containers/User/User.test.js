import React from 'react';
import { shallow } from 'enzyme';
import { User, mapStateToProps, mapDispatchToProps } from './User';

describe('User Component', () => {
  it('should match snapshot when user has questions', () => {
    const mockUser = {questions: 'yes'}
    const wrapper = shallow(<User user={mockUser} />);

    expect(wrapper).toMatchSnapshot()
  });
});