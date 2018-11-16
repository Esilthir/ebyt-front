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
	ponyForm = this.fb.group({
		artist: ['nom', Validators.required], 
		date: ['0', Validators.required], 
		genre: ['color', Validators.required],
		description: ['0', Validators.required],
		nbMaxPlace: ['0', Validators.required],
		price: ['0', Validators.required],
		nbBoughtPlace: ['0', Validators.required]
	});

	add: boolean;
	id: number;

  constructor(private fb: FormBuilder, private serviceConcert: ConcertService, private router: Router, private routeActive: ActivatedRoute) {}

	ngOnInit() {
		if( this.routeActive.snapshot.paramMap.get('id') === null){
			this.add = true;
		}
		else{
			this.add = false;
			this.id = parseInt(this.routeActive.snapshot.paramMap.get('id'));
			this.serviceConcert.getConcert(parseInt(this.routeActive.snapshot.paramMap.get('id'))).subscribe(c => this.ponyForm.setValue({
				artist: c.artist, 
				date: c.date, 
				genre: c.genre,
				description: c.description,
				nbMaxPlace: c.nbMaxPlace,
				price: c.price,
				nbBoughtPlace: c.nbBoughtPlace
			}));
		}
	}

	onSubmit(){
		if(this.add){
			let c: Concert = new Concert(this.ponyForm.value.artist, this.ponyForm.value.date, this.ponyForm.value.genre, this.ponyForm.value.description, 
				this.ponyForm.value.nbMaxPlace, this.ponyForm.value.price, this.ponyForm.value.nbBoughtPlace);
			this.serviceConcert.addConcert(c);
		}
		else{
			let concertUpdated = new Concert();
			concertUpdated.id = this.id;
			concertUpdated.artist = this.ponyForm.value.artist;
			concertUpdated.date = this.ponyForm.value.date;
			concertUpdated.genre = this.ponyForm.value.genre;
			concertUpdated.description = this.ponyForm.value.description;
			concertUpdated.nbMaxPlace = this.ponyForm.value.nbMaxPlace;
			concertUpdated.price = this.ponyForm.value.price;
			concertUpdated.nbBoughtPlace = this.ponyForm.value.nbBoughtPlace;
			this.serviceConcert.updateConcert(concertUpdated);
		}
	}
}
