import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrentWeatherData } from './icurrent-weather-data';
import { environment } from 'src/environments/environment';
import { ICurrentWeather } from './icurrent-weather';
import { map } from 'rxjs/operators';
import{IWeatherService} from './iweather-service';
import{Observable} from'rxjs';

@Injectable({
	providedIn: 'root',
})

//I'm following the ruls of IWeatherInterface
export class WeatherService implements IWeatherService {
	constructor(private httpClient: HttpClient) {}

	getCurrentWeather(search: string | number, country?: string) : Observable<ICurrentWeather>{
		let uriParams='';
		if(typeof search === 'string'){
			uriParams=`q=${search}`;
		}else{
			uriParams=`zip=${search}`
		}

		if(country){
			uriParams = `${uriParams},${country}`;
		}
		return this.httpClient
			.get<ICurrentWeatherData>(
				`https://api.openweathermap.org/data/2.5/weather?${uriParams}&appid=${environment.appId}`
			)
			.pipe(map((data) => this.transformToICurrentWeather(data)));
	}

	private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
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
//api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}
