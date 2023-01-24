import React from 'react'
import APIService from '../APIService'

export default class FlightsComponent extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             flights: []
        }
    }
    
    componentDidMount(){
        APIService.getZrhDepFlight().then((data) => {
            this.setState({ flights: data })
            console.log(this.state.data)
          })
          .catch(function (ex) {
              console.log('Response parsing failed. Error: ', ex);
          });;
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Flight Departure ZRH Details</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Aircraft IATA Code</th>
                            <th>Flight Departure IATA</th>
                            <th>Flight Arrival IATA</th>
                            <th>Flight Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.flights.map(flights =>
                                    <tr key={flights.iataCode}>
                                        <td>{flights.depIata}</td>
                                        <td>{flights.arrIata}</td>
                                        <td>{flights.status}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}