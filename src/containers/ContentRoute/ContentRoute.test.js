import React from 'react';
import { MemoryRouter } from 'react-router';
import { shallow, render} from 'enzyme';
import { ContentRoute, mapStateToProps } from './ContentRoute';

describe('ContentRoute', () => {
  it('should match snapshot with default path', () => {
    const wrapper = shallow(<ContentRoute />);
    
    expect(wrapper).toMatchSnapshot();
  });

 
});


