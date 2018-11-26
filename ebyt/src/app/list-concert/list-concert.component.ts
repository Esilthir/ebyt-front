import { Component, OnInit } from '@angular/core';
import { Concert } from '../concert';
import { ConcertService } from '../concert.service';
import { PanierServiceService } from '../panier-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-concert',
  templateUrl: './list-concert.component.html',
  styleUrls: ['./list-concert.component.css']
})
export class ListConcertComponent implements OnInit {

  rechercheAvancee: boolean

  concerts: Array<Concert> = new Array();
  concertsToShow: Array<Concert>;
  concertCount: number;

  constructor( private concertService: ConcertService, private panierService: PanierServiceService, private router : Router ) {

   }

  ngOnInit() {
    this.concertService.search().subscribe((listeConcert) => {
      this.concerts = listeConcert;
      this.concertCount = this.concerts.length;
      this.concertsToShow = this.concerts.slice(0,10);
   })
  }

  addPanier(concert: Concert) {
    this.panierService.addPanier(concert);
  }

  paginate(event) {
    this.concertsToShow = this.concerts.slice(event.first, event.first + event.rows);
    
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
  }

}
