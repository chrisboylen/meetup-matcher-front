import React from 'react';
import { shallow } from 'enzyme';
import { CitySearch } from './CitySearch';

describe('CitySearch', () => {
  let wrapper;
  let mockEvent;

  beforeEach(() => {
    mockEvent = {target: {value: 'bingo'}};
    wrapper = shallow(<CitySearch />);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<CitySearch />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should set state when invoked', () => {
      mockEvent = {target: {name: 'city', value: 'bingo'}};
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state().city).toBe('bingo');

      mockEvent = {target: {name: 'state', value: 'bongo'}};
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state().state).toBe('bongo');
    });
  });
});