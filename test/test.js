import { expect } from 'chai';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../lib/components/App'

describe('testing weathrly', () => {
  it('should have a component named NavBar', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('NavBar')).to.have.length(1);
  });

  it('should have a component named CurrentWeatherCard', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('CurrentWeatherCard')).to.have.length(1);
  });

  it('should have a component named TenDay', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('TenDay')).to.have.length(1);
  });

  it.skip('should have a component named Hourly', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('Hourly')).to.have.length(1);
  });



});