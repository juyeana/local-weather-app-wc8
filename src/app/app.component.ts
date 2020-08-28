import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { ICurrentWeather } from './icurrent-weather';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title='local-weather-app';
	currentWeather: ICurrentWeather;
	constructor(private weatherService: WeatherService) {}

	//'Kirkland','US' ->split(',) -> ['Kirkland', 'US']
	//'98034' ->split(',) -> [98034]
	//'Kirkland'

	doSearch(searchValue) {
		const userInput = searchValue.split(',').map((s) => s.trim());
		this.weatherService
			.getCurrentWeather(userInput[0], userInput.length>1 ? userInput[1]:undefined)
			.subscribe((data) => (this.currentWeather = data));
	}

	// now this.currentWeather got the weather information. current-weather.component.ts will @Input the result to render the result.
}
