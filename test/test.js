import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import App from '../lib/containers/App'
import NavBar from '../lib/components/NavBar'
import CurrentWeatherCard from '../lib/components/CurrentWeatherCard'
import TenDay from '../lib/components/TenDay'
import SevenHour from '../lib/components/SevenHour'
import LocationNotFound from '../lib/components/LocationNotFound'
import WeatherData from './helpers/MockData'
require('locus');

describe('testing Weathrly App', () => {
  describe('testing App component', () => {
    it('should have props for four types of data', () => {
      const wrapper = shallow(<App/>);

      expect(wrapper.props().response).to.be.defined;
      expect(wrapper.props().currentForecast).to.be.defined;
      expect(wrapper.props().forecast).to.be.defined;
      expect(wrapper.props().hourlyForecast).to.be.defined;
    });

    it('should have an initial state of null for all of its props', () => {
      const wrapper = shallow(<App/>);

      expect(wrapper.state().response).to.equal(null);
      expect(wrapper.state().currentForecast).to.equal(null);
      expect(wrapper.state().forecast).to.equal(null);
      expect(wrapper.state().hourlyForecast).to.equal(null);
    });

    it('should contain a NavBar, CurrentWeatherCard, SevenHour, and TenDay component', () => {
      const wrapper = shallow(<App/>);

      expect(wrapper.find(NavBar)).to.have.length.of(1);
      expect(wrapper.find(CurrentWeatherCard)).to.have.length.of(1);
      expect(wrapper.find(SevenHour)).to.have.length.of(1);
      expect(wrapper.find(TenDay)).to.have.length.of(1);
    });
  });

  describe('testing LocationNotFound c', () => {
    it('should display LocationNotFound component when location is not found', () => {

      const response = WeatherData.ResponseData.error;
      const wrapper = shallow(<LocationNotFound response={response}/>);

      expect(wrapper.find('.not-found-header').text()).to.equal('No cities match your search query');

    });
  });

  describe('testing NavBar component', () => {
    it('should have a component named NavBar', () => {
      const wrapper = shallow(<App/>);

      expect(wrapper.find('NavBar')).to.have.length(1);
    });

    it('NavBar should contain an input field and a submit button', () => {
      const wrapper = shallow(<NavBar/>);

      expect(wrapper.find('.text-input')).to.have.length(1);
      expect(wrapper.find('.submit-btn')).to.have.length(1);
    });

    it('NavBar should contain a state of location', () => {
      const wrapper = shallow(<NavBar/>);
      const navBarStates = wrapper.state();

      expect(navBarStates.location).to.equal('');
    });

    it('should be able to change the location state of NavBar', () => {
      const wrapper = shallow(<NavBar/>);
      let navBarStates = wrapper.state();
      const inputField = wrapper.find('.text-input');

      expect(navBarStates.location).to.equal('');
      inputField.simulate('change', { target: { value: 'Denver, CO' } });
      navBarStates = wrapper.state();

      expect(navBarStates.location).to.equal('Denver, CO');
    });

    it('should be able to click submit and register a click', () => {
      const handleSubmit = sinon.spy();
      const wrapper = shallow(<NavBar handleSubmit={handleSubmit}/>);
      const submitBtn = wrapper.find('.submit-btn');

      submitBtn.simulate('click');
      expect(handleSubmit).to.have.property('callCount', 1);
    });

    it('should update the location state and clear on submit', () => {
      const handleSubmit = sinon.spy();
      const wrapper = shallow(<NavBar handleSubmit={handleSubmit}/>);
      let navBarStates = wrapper.state();
      const submitBtn = wrapper.find('.submit-btn');
      const inputField = wrapper.find('.text-input');

      expect(navBarStates.location).to.equal('');
      inputField.simulate('change', { target: { value: 'Denver, CO' } });
      navBarStates = wrapper.state();

      expect(navBarStates.location).to.equal('Denver, CO');
      submitBtn.simulate('click');
      navBarStates = wrapper.state();

      expect(navBarStates.location).to.equal('');
    });
  });

  describe('testing CurrentWeatherCard component', () => {
    it('should have a component named CurrentWeatherCard', () => {
      const wrapper = shallow(<App/>);

      expect(wrapper.find('CurrentWeatherCard')).to.have.length(1);
    });

    it('should display instructional text if CurrentWeatherCard receives no data', () => {
      const wrapper = shallow(<CurrentWeatherCard currentForecast={null}/>);
      const greetWrapper = shallow(wrapper.node.type());

      expect(greetWrapper.find('.greeting-header').text()).to.equal('Please Enter a Location');
    });

    it('should display weather data if CurrentWeatherCard recieves data', () => {
      const currentForecast = WeatherData.CurrentData;
      const forecast = WeatherData.ForecastData;
      const wrapper = shallow(<CurrentWeatherCard currentForecast={currentForecast}
        forecast={forecast}/>);

      expect(wrapper.find('.current-city').text()).to.equal('Den');
      expect(wrapper.find('.current-day').text()).to.equal('Monday');
      expect(wrapper.find('.current-temp').text()).to.equal('70°F');
      expect(wrapper.find('.simple-forecast').text()).to.equal('Clear');
      expect(wrapper.find('.weather-sum').text()).to.equal('Clear all day');
      expect(wrapper.find('.current-hi').text()).to.equal('70°');
      expect(wrapper.find('.current-lo').text()).to.equal('32°');
    });
  });

  describe('testing TenDay component', () => {
    it('should have a component named TenDay', () => {
      const wrapper = shallow(<App/>);

      expect(wrapper.find('TenDay')).to.have.length(1);
    });

    it('should display no data if nothing is passed into component', () => {
      const wrapper = shallow(<TenDay/>);

      expect(wrapper.node).to.equal(null);
    });

    it('should display weather data if TenDay receives data', () => {
      const tenDayForecast = WeatherData.TenDay;
      const wrapper = shallow(<TenDay tenDayForecast={tenDayForecast}/>);

      expect(wrapper.find('.ten-day-data')).to.have.length(2);
      const weatherDataText = wrapper.find('.ten-day-data').map(node => node.text());

      expect(weatherDataText).to.deep.equal(['Tue28°65°', 'Wed20°58°']);
    });
  });

  describe('testing SevenHour component', () => {
    it('should have a component named SevenHour', () => {
      const wrapper = shallow(<App/>);

      expect(wrapper.find('SevenHour')).to.have.length(1);
    });

    it('should display no data if nothing is passed into the component', () => {
      const wrapper = shallow(<SevenHour/>);

      expect(wrapper.node).to.equal(null);
    });

    it('should display weather data if SevenHour receives data', () => {
      const hourlyForecast = WeatherData.SevenHour;
      const wrapper = shallow(<SevenHour hourlyForecast={hourlyForecast}/>);

      expect(wrapper.find('.hourly-box')).to.have.length(1);
      const weatherDataText = wrapper.find('.hourly-box').map(node => node.text());
      expect(weatherDataText).to.deep.equal(['5:00PM42°F']);
    });
  });
});
