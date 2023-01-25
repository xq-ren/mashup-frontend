const FLIGHTS_DEPZRH_REST_API = 'http://localhost:9090/flights/depZRH';
const FLIGHTS_ARRZRH_REST_API = 'http://localhost:9090/flights/arrZRH';
const WEATHER_ZRH_REST_API = 'http://localhost:9090/weather';

class APIService {    
    getZrhDepFlight(){
        return fetch(FLIGHTS_DEPZRH_REST_API,{ 
            method: 'get',
            mode:'no-cors',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin'
        })
        .then(res => res.json());      
    }

    getZrhArrFlight(){
        return fetch(FLIGHTS_ARRZRH_REST_API,{ 
            method: 'get',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin'
        })
        .then(res => res.json());        
    }

    getWeather(){
        return fetch(WEATHER_ZRH_REST_API,{ 
            method: 'get',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin'
        })
        .then(res => res.json());        
    }
}

export default new APIService();