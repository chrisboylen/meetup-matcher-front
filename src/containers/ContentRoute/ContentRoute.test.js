import React from 'react';
import { MemoryRouter } from 'react-router';
import { shallow, render} from 'enzyme';
import { ContentRoute, mapStateToProps, mapDispatchToProps } from './ContentRoute';
import { displayMeetups } from '../../actions';

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

  describe('mapDispatchToProps', () => {
    it('dispatch displayMeetups action when displayMeetups is invoked', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = displayMeetups({name: '1'});
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.displayMeetups({name: '1'});

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});


