import React from 'react';
import { shallow } from 'enzyme';
import { Questions, mapStateToProps, mapDispatchToProps } from './Questions';

describe('Questions', () => {
  let wrapper;
  let mockEvent;

  beforeEach(() => {
    wrapper = shallow(<Questions />);
    mockEvent = {target: {value: 'yes'}};
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should set state when invoked', () => {
      mockEvent = {target: {name: 'traveling'}};
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state().traveling).toBe(true);

      mockEvent = {target: {name: 'entrepreneur'}};
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state().entrepreneur).toBe(true);

      mockEvent = {target: {name: 'softwareDevs'}};
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state().softwareDevs).toBe(true);

      mockEvent = {target: {name: 'hiking'}};
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state().hiking).toBe(true);

      mockEvent = {target: {name: 'photography'}};
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state().photography).toBe(true);

      mockEvent = {target: {name: 'diningout'}};
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state().diningout).toBe(true);

      mockEvent = {target: {name: 'realEstate'}};
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state().realEstate).toBe(true);
    });
    it('should invoke handleChange when traveling is changed', () => {
      const spy = spyOn(wrapper.instance(), 'handleChange');
      wrapper.instance().forceUpdate();
      wrapper.find('#traveling').simulate('change', mockEvent);

      expect(spy).toHaveBeenCalled();
    });
    it('should invoke handleChange when entrepreneur is changed', () => {
      const spy = spyOn(wrapper.instance(), 'handleChange');
      wrapper.instance().forceUpdate();
      wrapper.find('#entrepreneur').simulate('change', mockEvent);

      expect(spy).toHaveBeenCalled();
    });
  });
});