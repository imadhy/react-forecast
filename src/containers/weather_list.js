import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GettingStartedGoogleMap from '../components/google_maps';

 class WeatherList extends Component {
   renderWeather(cityData) {
     const name = cityData.city.name;
     const temps = cityData.list.map(weather => weather.main.temp);
     const pressures = cityData.list.map(weather => weather.main.pressure);
     const humidities = cityData.list.map(weather => weather.main.humidity);
     const {lon, lat} = cityData.city.coord;

     return (
       <tr key={name}>
        <td><GettingStartedGoogleMap lon={lon} lat={lat}  containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }/></td>
        <td><Chart data={temps} color="orange" units="K" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
       </tr>
     );
   }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody className="charts-row">
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// Argument here is state.weather, to factorize
// we can take the property we want and put it in {}
function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
