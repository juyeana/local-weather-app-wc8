import { TestBed } from '@angular/core/testing';

import { WeatherServiceFake } from './weather-service-fake.service';

describe('WeatherServiceFakeService', () => {
	let service: WeatherServiceFake;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(WeatherServiceFake);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
