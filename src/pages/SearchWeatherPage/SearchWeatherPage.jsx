import React, { Component } from 'react';
import WeatherForm from '../../components/WeatherForm/WeatherForm';
import { getTimeFromTimestamp } from '../../services/utils';
import { getWeatherDataFromBackEnd } from '../../services/weather-api';
import WeatherCard from '../../components/WeatherCard/WeatherCard';

class SearchWeatherPage extends Component {
  state = {
    weatherData: [],
    sunrise: '',
    sunset: ''
  }

  handleGetWeatherData = async formData => {
    const weatherData = await getWeatherDataFromBackEnd(formData);
    const sunrise = await getTimeFromTimestamp(weatherData.sys.sunrise);
    const sunset = await getTimeFromTimestamp(weatherData.sys.sunset);
    this.props.history.push('/weather');
    this.setState({weatherData, sunrise, sunset});
  }

  render(){
    return(
        <>
        <h4>Search Weather Conditions</h4>
          <WeatherForm 
              handleGetWeatherData={this.handleGetWeatherData}
          />
          {this.state.weatherData.base ?
          <>
              <WeatherCard 
                  weatherData={this.state.weatherData}
                  windDirection={this.state.windDirection}
                  sunrise={this.state.sunrise}
                  sunset={this.state.sunset}
              />
              
          </>    
              :
              <>
              </>
          }
        </>
    )
}
}
export default SearchWeatherPage;