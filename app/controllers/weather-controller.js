//weather-controller.js
import _weatherService from "../services/weather-service.js";
import _store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screena
function _drawWeather() {
  console.log("THE WEATHER MAN SAYS:", _store.State.weather);

  let str = '';

  let myWeather = _store.State.weather;
  str = myWeather.WeatherTemplate;



  document.getElementById("weather").innerHTML = str;

}
export default class WeatherController {
  constructor() {
    console.log('You are in the WeatherController constructor')
    _store.subscribe("weather", _drawWeather);
    this.getWeather();
    let updateWeather = setInterval(this.getWeather, 60000);

  }

  getWeather() {

    console.log("in weather-controller getWeather()");
    _weatherService.getWeather();
  }
}


