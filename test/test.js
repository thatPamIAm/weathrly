import { expect } from 'chai';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/components/App'
import NavBar from '../lib/components/NavBar'
import CurrentWeatherCard from '../lib/components/CurrentWeatherCard'
import TenDay from '../lib/components/TenDay'
import WeatherData from './helpers/MockData'

require('locus')

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

    it('should be able to change the location state of NavBar', () => {
      const wrapper = shallow(<NavBar/>);
      let navBarStates = wrapper.state();
      const inputField = wrapper.find('.textInput');

      expect(navBarStates.location).to.equal('');
      inputField.simulate('change', {target: {value: 'Denver, CO'}});
      navBarStates = wrapper.state();
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

    it('should display instructional text if CurrentWeatherCard recieves no data', () => {
      const wrapper = shallow(<CurrentWeatherCard/>);
      expect(wrapper.find('h4').text()).to.equal('Please Enter a State and City');
    });

    it('should display weather data if CurrentWeatherCard recieves data', () => {
      const currentData = WeatherData.CurrentData;
      const forecastData   = WeatherData.ForecastData;
      const wrapper = shallow(<CurrentWeatherCard currentData={currentData} forecastData={forecastData}/>);

      expect(wrapper.find('.currentCity').text()).to.equal('Den');
      expect(wrapper.find('.currentDay').text()).to.equal('Monday');
      expect(wrapper.find('.currentTemp').text()).to.equal('70°F');
      expect(wrapper.find('.simpleForecast').text()).to.equal('Clear');
      expect(wrapper.find('.weatherSum').text()).to.equal('Clear all day');
      expect(wrapper.find('.currentHi').text()).to.equal('High 70');
      expect(wrapper.find('.currentLo').text()).to.equal('Low 32');
    });

  });

  describe('testing TenDay component', () => {
    it('should have a component named TenDay', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.find('TenDay')).to.have.length(1);
    });

    it('should display no data if nothing is passed into component', () => {
      const wrapper = shallow(<TenDay/>);
      expect(wrapper.find('div').text()).to.equal('');
    });

    it('should display weather data if TenDay recieves data', () => {
      const tenDayForecast = WeatherData.TenDay;
      const wrapper = shallow(<TenDay tenDayForecast={tenDayForecast}/>);

      expect(wrapper.find('.tenDayData')).to.have.length(2);

      const weatherDataText = wrapper.find('.tenDayData').map(node => node.text())
      expect(weatherDataText).to.deep.equal([ 'TueHi 65Lo 28', 'WedHi 58Lo 20' ]);
    });

  });

  describe('testing Hourly component', () => {
    it.skip('should have a component named Hourly', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.find('Hourly')).to.have.length(1);
    });

  });
});