import React from 'react'
import APIService from '../APIService'

export default class FlightsComponent extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             flight: []
        }
    }
    
    componentDidMount(){
        APIService.getZrhDepFlight().then((data) => {
            this.setState({ flight: data })
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
                            <th>Departure Aircraft IATA Code</th>
                            <th>Flight Departure IATA</th>
                            <th>Flight Status</th>

                            <th>Arrival Aircraft IATA Code</th>
                            <th>Flight Arrival IATA</th>
                            <th>Flight Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.flight.map((flights) =>
                                    <tr key={flights.id}>
                                        <td>{flights.iataCodeDep}</td>
                                        <td>{flights.depIata}</td>
                                        <td>{flights.status}</td>

                                        <td>{flights.iataCodeArr}</td>
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

