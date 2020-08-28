import { ICurrentWeather } from './icurrent-weather';
import{Observable} from 'rxjs/';

//since WeatherServiceFake is not observable while WeatherService is observable
export interface IWeatherService {
	getCurrentWeather(search: string | number, country?: string): Observable<ICurrentWeather>;
}
