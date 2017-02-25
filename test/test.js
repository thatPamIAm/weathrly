import { expect } from 'chai';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/components/App'
import NavBar from '../lib/components/NavBar'

describe('testing Weathrly App', () => {

  describe('testing NavBar component', () => {
    it('should have a component named NavBar', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.find('NavBar')).to.have.length(1);
    });

    it('NavBar should contain an input feild and a submit button', () => {
      const wrapper = shallow(<NavBar/>);
      expect(wrapper.find('.textInput')).to.have.length(1);
      expect(wrapper.find('.submitBtn')).to.have.length(1);
    });

    it('NavBar should contain a state of location', () => {
      const wrapper = shallow(<NavBar/>);
      const navBarStates= wrapper.state();

      expect(navBarStates.location).to.equal('');
    });

    it.skip('should be able to change the location state of NavBar', () => {
      const wrapper = shallow(<NavBar/>);
      const navBarStates= wrapper.state();
      const inputField = wrapper.find('.textInput');

      expect(navBarStates.location).to.equal('');
      inputField.simulate('change', {target: {value: 'Denver CO'}});
      expect(navBarStates.location).to.equal('Denver, CO');
    });

    it.skip('should be able to change the location state of NavBar and on submit clear the location state', () => {
      const wrapper = shallow(<NavBar/>);
      const navBarStates= wrapper.state();
      const inputField = wrapper.find('.textInput');
      const submitBtn = wrapper.find('.submitBtn');

      expect(navBarStates.location).to.equal('');
      inputField.simulate('change', {target: {value: 'Denver, CO'}});
      expect(navBarStates.location).to.equal('Denver, CO');
      submitBtn.simulate('click');
      expect(navBarStates.location).to.equal('');
    });

  });

  describe('testing CurrentWeatherCard component', () => {
    it('should have a component named CurrentWeatherCard', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.find('CurrentWeatherCard')).to.have.length(1);
    });

  });

  describe('testing TenDay component', () => {
    it('should have a component named TenDay', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.find('TenDay')).to.have.length(1);
    });

  });

  describe('testing Hourly component', () => {
    it.skip('should have a component named Hourly', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.find('Hourly')).to.have.length(1);
    });

  });
});