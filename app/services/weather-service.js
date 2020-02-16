//weatherservice.js

import Weather from "../models/weather.js";
import _store from "../store.js";

// @ts-ignore
const _weatherApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
  timeout: 3000
});

class WeatherService {

  constructor() {
    console.log('You are in the WeatherService constructor')

  }

  getWeather() {
    _weatherApi
      .get("")
      .then(res => {
        let currentWeather = new Weather(res.data);
        console.log('in weather-service getWeather()', currentWeather);
        _store.commit("weather", currentWeather);

      })
      .catch(error => {
        console.error(error);

      });


  }


  /*
  async getWeather() {
    console.log("Calling the Weatherman");
    let res = await weatherApi.get();
    store.commit("weather", new Weather(res.data));
  }
  */
}

const weatherService = new WeatherService();
export default weatherService;
