import { Component, OnInit } from '@angular/core';
import { Concert } from '../concert';
import { ConcertService } from '../concert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  concerts: Array<Concert> = new Array();
  fameConcerts : Array<Concert> = new Array();
  lastConcerts : Array<Concert> = new Array();
  
  constructor(private concertService: ConcertService) { }
  
  ngOnInit() {
    this.concertService.getConcerts().subscribe((listeConcert) => {
      this.concerts = listeConcert;
    })
    this.concertService.getFameConcerts().subscribe((listeFameConcerts) => {
      this.fameConcerts = listeFameConcerts;
    })
    this.concertService.getLastConcerts().subscribe((listeLastConcerts) => {
      this.lastConcerts = listeLastConcerts;
    })
  }
}