import React from 'react'
import APIService from '../APIService'

export default class WeatherComponent extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             flights: []
        }
    }
    
    componentDidMount(){
        APIService.getWeather().then((data) => {
            this.setState({ weather: data })
            console.log(this.state.data)
          })
          .catch(function (ex) {
              console.log('Response parsing failed. Error: ', ex);
          });;
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Weather ZH Details</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Location Name</th>
                            <th>Local Time</th>
                            <th>Current Temperature in C</th>
                            <th>Forecast Today</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.weather.map(weatherZ =>
                                    <tr key={weatherZ.name}>
                                        <td>{weatherZ.localTime}</td>
                                        <td>{weatherZ.tempC}</td>
                                        <td>{weatherZ.forecastDay}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}