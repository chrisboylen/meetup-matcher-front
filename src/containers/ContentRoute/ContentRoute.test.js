import React from 'react';
import { shallow } from 'enzyme';
import { ContentRoute } from './ContentRoute';

describe('ContentRoute', () => {
  it('should match snapshot with default path', () => {
    const wrapper = shallow(<ContentRoute />);
    
    expect(wrapper).toMatchSnapshot();
  });
});


