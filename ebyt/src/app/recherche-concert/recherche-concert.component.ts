import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConcertService } from '../concert.service';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Concert } from '../concert';


@Component({
  selector: 'app-recherche-concert',
  templateUrl: './recherche-concert.component.html',
  styleUrls: ['./recherche-concert.component.css']
})
export class RechercheConcertComponent implements OnInit {

  @Input() concerts: Concert[];
  @Output() concertsChange =  new EventEmitter<Concert[]>();
  name: string;
  artist: string;
  date: Date;
  place: string;
  priceMax: number;

  constructor(private concertService: ConcertService) {
    this.priceMax = 200;
   }

  ngOnInit() {
  }

  search() {
    this.concertService.search(this.name, this.artist, this.date, this.place, this.priceMax).subscribe(concerts => {
      this.concerts = concerts;
      this.concertsChange.emit(this.concerts);
    });
  }

}