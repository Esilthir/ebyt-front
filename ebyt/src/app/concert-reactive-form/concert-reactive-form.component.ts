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
			this.serviceConcert.getConcert(parseInt(this.routeActive.snapshot.paramMap.get('id'))).subscribe(c => this.concertForm.setValue({
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
			let c: Concert = new Concert(this.concertForm.value.artist, this.concertForm.value.date, this.concertForm.value.genre, this.concertForm.value.description, 
				this.concertForm.value.nbMaxPlace, this.concertForm.value.price, this.concertForm.value.nbBoughtPlace);
			this.serviceConcert.addConcert(c);
		}
		else{
			let concertUpdated = new Concert();
			concertUpdated.id = this.id;
			concertUpdated.artist = this.concertForm.value.artist;
			concertUpdated.date = this.concertForm.value.date;
			concertUpdated.genre = this.concertForm.value.genre;
			concertUpdated.description = this.concertForm.value.description;
			concertUpdated.nbMaxPlace = this.concertForm.value.nbMaxPlace;
			concertUpdated.price = this.concertForm.value.price;
			concertUpdated.nbBoughtPlace = this.concertForm.value.nbBoughtPlace;
			this.serviceConcert.updateConcert(concertUpdated);
		}
	}
}
