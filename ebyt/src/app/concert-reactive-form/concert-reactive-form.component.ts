import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { ConcertService } from '../concert.service';
import { Concert } from '../concert';

@Component({
  selector: 'app-concert-reactive-form',
  templateUrl: './concert-reactive-form.component.html',
  styleUrls: ['./concert-reactive-form.component.css']
})
export class ConcertReactiveFormComponent implements OnInit {
	concertForm = this.fb.group({
		artist: ['', Validators.required],
		name: ['', Validators.required],
		date: ['', Validators.required], 
		genre: ['', Validators.required],
		description: ['', Validators.required],
		nbMaxPlaces: ['', Validators.required],
		price: ['', Validators.required],
	});

	add: boolean;
	id: number;
	nbBoughtPlace: number;

  constructor(private fb: FormBuilder, private serviceConcert: ConcertService, private router: Router, private routeActive: ActivatedRoute) {}

	ngOnInit() {
		if( this.routeActive.snapshot.paramMap.get('id') === null){
			this.add = true;
		}
		else{
			this.add = false;
			this.id = parseInt(this.routeActive.snapshot.paramMap.get('id'));
			this.serviceConcert.getConcert(parseInt(this.routeActive.snapshot.paramMap.get('id'))).subscribe(c => {this.concertForm.setValue({
				artist: c.artist, 
				name: c.name,
				date: c.date, 
				genre: c.genre,
				description: c.description,
				nbMaxPlaces: c.nbMaxPlaces,
				price: c.price,
			}); 
			this.nbBoughtPlace = c.nbBoughtPlace});
		}
	}

	onSubmit(){
		if(this.add){
			let c: Concert = new Concert(this.concertForm.value.artist, this.concertForm.value.name, this.concertForm.value.date, this.concertForm.value.genre, this.concertForm.value.description, 
				this.concertForm.value.nbMaxPlaces, this.concertForm.value.price, this.concertForm.value.nbBoughtPlace);
			this.serviceConcert.addConcert(c);
		}
		else{
			let concertUpdated = new Concert();
			concertUpdated.id = this.id;
			concertUpdated.artist = this.concertForm.value.artist;
			concertUpdated.name = this.concertForm.value.artist;
			concertUpdated.date = this.concertForm.value.date;
			concertUpdated.genre = this.concertForm.value.genre;
			concertUpdated.description = this.concertForm.value.description;
			concertUpdated.nbMaxPlaces = this.concertForm.value.nbMaxPlaces;
			concertUpdated.price = this.concertForm.value.price;
			concertUpdated.nbBoughtPlace = this.nbBoughtPlace;
			this.serviceConcert.updateConcert(concertUpdated);
		}
	}
}
