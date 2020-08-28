import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import{HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';
import{WeatherServiceFake} from './weather-service-fake.service';

describe('AppComponent', () => {

  //setting up a virtual test environment
  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent],
      
      // This is where flipping happens
      // When I run test, use WeatherServiceFake instead of WeatherService 
			providers: [
				{ provide: WeatherService, useClass: WeatherServiceFake },
			],
		}).compileComponents();
  }));

  it('should create the app', () => {

    //create an app
    const fixture = TestBed.createComponent(AppComponent);
    //load the created component in memory
    const app = fixture.componentInstance;
    //assertion
    expect(app).toBeTruthy();
  });

  //test the component
  it(`should have as title 'local-weather-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('local-weather-app');
  });
//test html to see if UI displays as based on the test above
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    //nativeElement: loading HTML DOM
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain(
			'LocalCast Weather'
		);
  });
});
