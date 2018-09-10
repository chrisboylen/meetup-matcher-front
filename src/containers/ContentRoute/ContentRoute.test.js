import React from 'react';
import { MemoryRouter } from 'react-router';
import { shallow, render} from 'enzyme';
import { ContentRoute, mapStateToProps } from './ContentRoute';

describe('ContentRoute', () => {
  it('should match snapshot with default path', () => {
    const wrapper = shallow(<ContentRoute />);
    
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return an object of meetups array', () => {
      const mockState = {
        meetups: [{ name: '1' }, { name: '1' }],
        displayMeetups: 'BINGO'
      };
      const expected = { meetups: [{ name: '1' }, { name: '1' }] };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
});


