import React from 'react';
import { shallow } from 'enzyme';
import { Meetup } from './Meetup';

describe('Meetup', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Meetup name='bingo'/>);

    expect(wrapper).toMatchSnapshot();
  });
});