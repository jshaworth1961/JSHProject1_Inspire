//weather.js
export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name;
    this.kelvin = data.main.temp;
    this.base = data.base;
    this.weather = data.weather;

    this.fahrenheit = Math.round(9/5*(this.kelvin-273) + 32);

    this.iconCode = this.weather[0].icon;
    console.log('this.iconCode is ',this.iconCode)
    this.iconUrl = "http://openweathermap.org/img/w/" + this.iconCode + ".png";

    //this.iconUrl = `${this.weather[0].icon}` + ".png";
    console.log('this.iconUrl =', this.iconUrl);


     }

     get WeatherTemplate()
     {
       return `
          <p class="p-weather">City: ${this.city}</p>
          <p class="p-weather">Conditions: ${this.weather[0].description}</p>
          <p class ="p-weather"><img src= "${this.iconUrl}"></p>
          <p class="p-weather">Temp: ${this.fahrenheit} Degrees F</p>
       `
         //< p class ="p-weather" > <img src="${this.weather[0].icon}"></p>
     }

     
}