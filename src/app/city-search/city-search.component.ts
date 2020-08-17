import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
	selector: 'app-city-search',
	templateUrl: './city-search.component.html',
	styleUrls: ['./city-search.component.css'],
})
export class CitySearchComponent implements OnInit {
	@Output() searchEvent = new EventEmitter<string>(); //I'm saying I'm going to emit called "searchEvent" and the data is string

  //added an form validation
	search = new FormControl('', [Validators.minLength(3)]); //to connect(bind) "search input field in html to this .ts. They can talk to each other now"
	constructor() {}

	ngOnInit(): void {
    //this.search : input from the search box
    //valueChanges: trigger everytime user input something
    //debounce: add some delay to control the number of valueChanges event trigger
    //.subscribe((data) => this.searchEvent.emit(data)): sending out search data so anyone can use it!

		this.search.valueChanges
			.pipe(debounceTime(1000))
      .subscribe((data) => {
										if (!this.search.invalid) this.searchEvent.emit(data);
									});
      
	}
}
