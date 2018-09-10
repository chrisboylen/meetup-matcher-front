import React from 'react';
import { shallow } from 'enzyme';
import { CitySearch } from './CitySearch';

describe('CitySearch', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<CitySearch />);

    expect(wrapper).toMatchSnapshot();
  });
});