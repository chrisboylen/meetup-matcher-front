import React from 'react';
import { shallow } from 'enzyme';
import { MeetupsCont } from './MeetupsCont';

describe('MeetupsCont', () => {
  it('should match snapshot', () => {
    const meetups = [{},{}]
    const wrapper = shallow(<MeetupsCont meetups={meetups}/>);

    expect(wrapper).toMatchSnapshot();
  });
});