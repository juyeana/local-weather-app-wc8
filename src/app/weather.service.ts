import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ICurrentWeatherData} from './icurrent-weather-data';
import { environment } from 'src/environments/environment';
import { ICurrentWeather } from './icurrent-weather';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient) { }

  getCurrentWeather(city:string, country:string){
    return this.httpClient.get<ICurrentWeatherData>(
			`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${environment.appId}`
		).pipe(map(data =>this.transformToICurrentWeather(data)));
  }

  transformToICurrentWeather(data: ICurrentWeatherData):ICurrentWeather{
    return {
			city: data.name,
			country: data.sys.country,
			date: new Date(data.dt * 1000),
			image: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
			temperature: data.main.temp * 1.8 - 459.67,
			description: data.weather[0].description,
		};
  }
}

// https://openweathermap.org/img/wn/09d.png to get weather icon
