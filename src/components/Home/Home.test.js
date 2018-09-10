import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Home } from './Home';
import { CitySearch } from '../../containers/CitySearch/CitySearch';

describe('Home', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Home />);
      
    expect(wrapper).toMatchSnapshot();
  });
});