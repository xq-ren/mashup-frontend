const FLIGHTS_DEPZRH_REST_API = 'http://localhost:9090/flights/depZRH';
const FLIGHTS_ARRZRH_REST_API = 'http://localhost:9090/flights/arrZRH';
const WEATHER_ZRH_REST_API = 'http://localhost:9090/weather';

class APIService {    
    getZrhDepFlight(){
        return fetch(FLIGHTS_DEPZRH_REST_API,{ 
            method: 'GET',
            mode:'no-cors',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:9090/flights/depZRH',
                },
                'credentials': 'same-origin'
        })
        //.then(res => res.json());
        .then(res => res.text())          // convert to plain text
        .then(text => console.log(text))
              
    }

    getZrhArrFlight(){
        return fetch(FLIGHTS_ARRZRH_REST_API,{ 
            method: 'GET',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:9090/flights/arrZRH',
                },
                'credentials': 'same-origin'
        })
        .then(res => res.json());        
    }

    getWeather(){
        return fetch(WEATHER_ZRH_REST_API,{ 
            method: 'GET',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:9090/flights/weather',
                },
                'credentials': 'same-origin'
        })
        .then(res => res.json());        
    }
}

export default new APIService();