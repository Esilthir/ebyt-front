import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { ConcertService } from '../concert.service';
import { Concert } from '../concert';
import {FileUploadModule} from 'primeng/fileupload';
import { SelectItem, MessageService } from 'primeng/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
		urlPic: [''],
		urlPicRec: [''],
		urlVideo: [''],
		place: ['', Validators.required]
	});

	add: boolean;
	id: number;
	nbBoughtPlace: number;
	active: boolean;
	selectedPic: File = null;
	selectedPicRec: File = null;
	uploadedFiles: any[] = [];
	urlSauvegardeImageCarre = 'http://localhost:8091/api/Produits/stockerCarre/';
	urlSauvegardeImageRec = 'http://localhost:8091/api/Produits/stockerRec/';
	urlImageSelectionne = './assets/images/raw/uploaded/';

  constructor(private fb: FormBuilder, private serviceConcert: ConcertService, private router: Router, private routeActive: ActivatedRoute, private messageService: MessageService) {}

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
				urlPic: "",
				urlPicRec: "",
				place: c.place,
				urlVideo: c.urlVideo
			}); 
			this.nbBoughtPlace = c.nbBoughtPlace,
			this.active = c.active});
		}
		console.log(this.id);
	}

	onPicRecSelected(event){
		this.selectedPicRec = <File>event.target.files[0];
	}

	onPicSelected(event){
		this.selectedPic = <File>event.target.files[0];
	}

	onSubmit(){
		let concert: Concert = new Concert();
		concert.artist = this.concertForm.value.artist;
		concert.name = this.concertForm.value.name;
		concert.date = this.concertForm.value.date;
		concert.genre = this.concertForm.value.genre;
		concert.description = this.concertForm.value.description;
		concert.nbMaxPlaces = this.concertForm.value.nbMaxPlaces;
		concert.price = this.concertForm.value.price;
		concert.nbBoughtPlace = this.nbBoughtPlace;
		concert.active = this.active;
		concert.place = this.concertForm.value.place;
		if(this.concertForm.value.urlVideo === ""){
			concert.urlVideo = "https://www.youtube.com/embed/gah8KMbsj40";
		}
		else{
			concert.urlVideo = this.concertForm.value.urlVideo;
		}

		if(this.add){
			let idConcert;
			this.serviceConcert.addConcert(concert).subscribe( response => {
				idConcert = response.id;
				
				// Appels WS images
				// , this.selectedPicRec, this.selectedPic
			});
			// this.router.navigate(['/'])
		}
		else{
			concert.id = this.id;
			this.serviceConcert.updateConcert(concert, this.selectedPicRec, this.selectedPic);
		}

		console.log(this.selectedPicRec);
		console.log(this.selectedPic)
	}

	onUploadCarre(event) {
    	for(let file of event.files) {
   	    	this.uploadedFiles.push(file);
   	    }
    	this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
	}

	onUploadRectangle(event){
		for(let file of event.files) {
   	    	this.uploadedFiles.push(file);
   	    }
    	this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
	}
}
