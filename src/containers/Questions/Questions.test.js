import React from 'react';
import { shallow } from 'enzyme';
import { Questions, mapStateToProps, mapDispatchToProps } from './Questions';
import { addUserQuestions } from '../../actions';

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
    it('should invoke handleChange when softwareDevs is changed', () => {
      const spy = spyOn(wrapper.instance(), 'handleChange');
      wrapper.instance().forceUpdate();
      wrapper.find('#softwareDevs').simulate('change', mockEvent);

      expect(spy).toHaveBeenCalled();
    });
    it('should invoke handleChange when hiking is changed', () => {
      const spy = spyOn(wrapper.instance(), 'handleChange');
      wrapper.instance().forceUpdate();
      wrapper.find('#hiking').simulate('change', mockEvent);

      expect(spy).toHaveBeenCalled();
    });
    it('should invoke handleChange when photography is changed', () => {
      const spy = spyOn(wrapper.instance(), 'handleChange');
      wrapper.instance().forceUpdate();
      wrapper.find('#photography').simulate('change', mockEvent);

      expect(spy).toHaveBeenCalled();
    });
    it('should invoke handleChange when diningout is changed', () => {
      const spy = spyOn(wrapper.instance(), 'handleChange');
      wrapper.instance().forceUpdate();
      wrapper.find('#diningout').simulate('change', mockEvent);

      expect(spy).toHaveBeenCalled();
    });
    it('should invoke handleChange when realEstate is changed', () => {
      const spy = spyOn(wrapper.instance(), 'handleChange');
      wrapper.instance().forceUpdate();
      wrapper.find('#realEstate').simulate('change', mockEvent);

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('handleSubmit', () => {
    it('should ', () => {
      
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object of questions', () => {
      const mockState = {questions: [{traveling: true}], meetups: 'gravy'};
      const expected = {questions: [{traveling: true}]};
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
    it('should return a user object', () => {
      const mockState = {user: {name: 'tim'}, meetups: 'gravy'};
      const expected = {user: {name: 'tim'}};
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should dispatch addUserQuestions when addUserQuestions is invoked', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addUserQuestions({hiking: true});
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addUserQuestions({hiking: true});

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});