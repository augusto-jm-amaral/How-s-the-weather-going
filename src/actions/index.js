import axios from 'axios';

const API_KEY = '4924daae5195b06dea21c47bd876c5a3';
const ROOT_URL  = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?mode=json&appid=${API_KEY}`;

export const FETCH_WEATHER =  'FETCH_WEATHER';

export default function fetchWeather(city) {

  const url = `${ROOT_URL}&q=${city},br`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}