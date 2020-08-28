import { Injectable } from '@angular/core';
import { IWeatherService } from './iweather-service';
import { ICurrentWeather } from './icurrent-weather';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class WeatherServiceFake implements IWeatherService {
	private fakeWeather: ICurrentWeather = {
		city: 'Kirkland',
		country: 'US',
		date: new Date(),
		image: '',
		temperature: 70,
		description: 'sunny',
	};
	constructor() {}

	getCurrentWeather(
		search: string | number,
		country?: string
	): Observable<ICurrentWeather> {
		//'of' keyward makes the this.fakeWeather valiable as observable
		return of(this.fakeWeather);
	}
}
