import { Component, OnInit, Input } from '@angular/core';
import {ICurrentWeather} from '../icurrent-weather';
@Component({
	selector: 'app-current-weather',
	templateUrl: './current-weather.component.html',
	styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
	//When parent gives me data, I want to observe it. I'm an input event. Once you give me data, I'll store it to current variable.
	// Then how the parent component gives data here
	//property 'currnet' binding in app.component.html
	//<app-current-weather [current]="currentWeather"></app-current-weather>

	@Input() current: ICurrentWeather;
	constructor() {}

	ngOnInit(): void {}
}
