import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
	selector: 'app-city-search',
	templateUrl: './city-search.component.html',
	styleUrls: ['./city-search.component.css'],
})
export class CitySearchComponent implements OnInit {
	@Output() searchEvent = new EventEmitter<string>(); //I'm saying I'm going to emit called "searchEvent" and passing data w/ string type so anyone can use it. You can name it any name
	//next question is where you're gonna emit? ==> the place we're going to emit is in the ngOnInit
	//app.component.html where other child components are called will bind the searchEvent as event binding -> look app.component.html

  //added an form validation
  //to connect(bind) "search" input field in html to this .ts component. They can talk to each other now"
  //connecting html and component together
	search = new FormControl('', [Validators.minLength(3)]); 
	constructor() {}

	ngOnInit(): void {
    //this.search : input from the search box
    //valueChanges: Everytime user types something, it will emit the changed value to be consumed. 
    //debounce: add some delay to control the number of valueChanges event trigger
		//.subscribe((data) => this.searchEvent.emit(data)): 
		// consume the data coming in and I want to give that data to searchEvent. The searchEvent will emit the data so any component can use it!

		this.search.valueChanges
			.pipe(debounceTime(1000))
      .subscribe((data) => {
										if (!this.search.invalid) this.searchEvent.emit(data);
									});
      
	}
}
