import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConcertService } from '../concert.service';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Concert } from '../concert';
import { Genre } from '../genre';


@Component({
  selector: 'app-recherche-concert',
  templateUrl: './recherche-concert.component.html',
  styleUrls: ['./recherche-concert.component.css']
})
export class RechercheConcertComponent implements OnInit {

  @Input() concerts: Concert[];
  @Output() concertsChange =  new EventEmitter<Concert[]>();

  genres = [
    {name: 'POP'},
    {name: 'ROCK'},
    {name: 'METAL'},
    {name: 'CLASSIQUE'},
    {name: 'ELECTRO'},
    {name: 'VARIETE'},
    {name: 'ANNEES 80'},
    {name: 'PUNK'},
    {name: 'BLUES'},
    {name: 'JAZZ'},
    {name: 'ACOUSTIQUE'}
  ]

  name= "";
  artist = "";
  genre: any = "";
  place = "";
  priceMax: number;

  constructor(private concertService: ConcertService) {
    this.priceMax = 200;
   }

  ngOnInit() {

  }

  search() {
    this.concertService.search(this.name, this.artist, this.genre.name, this.place, this.priceMax).subscribe(concerts => {
      this.concerts = concerts;
      this.concertsChange.emit(this.concerts);

    });
  }

}