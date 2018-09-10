import React from 'react';
import { shallow } from 'enzyme';
import { CitySearch, mapStateToProps, mapDispatchToProps } from './CitySearch';
import { displayMeetups } from '../../actions';

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
    it('should invoke handleChange when city is changed', () => {
      const spy = spyOn(wrapper.instance(), 'handleChange');
      wrapper.instance().forceUpdate();
      wrapper.find('.city-input').simulate('change', mockEvent);

      expect(spy).toHaveBeenCalled();
    });
    it('should invoke handleChange when state is changed', () => {
      const spy = spyOn(wrapper.instance(), 'handleChange');
      wrapper.instance().forceUpdate();
      wrapper.find('.state-input').simulate('change', mockEvent);

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('handleSubmit', () => {
    let mockDisplayMeetups;

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({json: () => Promise.resolve({name: 'bingo'})}));

      mockDisplayMeetups = jest.fn();
      mockEvent = {preventDefault: jest.fn()};
      wrapper = shallow(
        <CitySearch displayMeetups={mockDisplayMeetups} />
      );
    });
    it('should invoke displayMeetups when handleSubmit is invoked', async () => {
      await wrapper.instance().handleSubmit(mockEvent);

      expect(mockDisplayMeetups).toHaveBeenCalled();
    });
    it('should set state to empty string when handleSubmit invoked', async () => {
      wrapper.setState({city: 'denver', state: 'co'});
      expect(wrapper.state().city).toBe('denver');
      expect(wrapper.state().state).toBe('co');

      await wrapper.instance().handleSubmit(mockEvent);
      
      expect(wrapper.state().city).toBe('');
      expect(wrapper.state().state).toBe('');
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object of meetups array', () => {
      const mockState = {
        meetups: [{},{}],
        displayMeetups: 'bingo'
      };
      const expected = {
        meetups: [{},{}]
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
});