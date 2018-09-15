import React from 'react';
import { shallow } from 'enzyme';
import { MeetupsCont, mapStateToProps, mapDispatchToProps } from './MeetupsCont';
import { getMeetups } from '../../actions';

describe('MeetupsCont', () => {
  it('should match snapshot', () => {
    const meetups = [{}, {}];
    const wrapper = shallow(<MeetupsCont meetups={meetups}/>);

    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return an object of meetups array', () => {
      const mockState = {
        meetups: [{ name: '1' }, { name: '2' }],
        getMeetups: 'BINGO'
      };
      const expected = {
        meetups: [{ name: '1' }, { name: '2' }]
      };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with getMeetups action when getMeetups is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getMeetups({name: '1'});
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getMeetups({name: '1'});

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});