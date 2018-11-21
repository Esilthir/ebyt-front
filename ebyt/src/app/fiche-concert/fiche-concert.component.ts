import { Component, OnInit } from '@angular/core';
import { Concert } from '../concert';
import { ActivatedRoute } from '@angular/router';
import { ConcertService } from '../concert.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-fiche-concert',
  templateUrl: './fiche-concert.component.html',
  styleUrls: ['./fiche-concert.component.css']
})
export class FicheConcertComponent implements OnInit {
  concert: Concert;
  constructor(private route: ActivatedRoute, private service: ConcertService) { 
    this.concert = new Concert();
  }
  
  images: any[];
  safeVideoUrl: SafeResourceUrl;
  safePicUrl: SafeResourceUrl;
  
  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 0);
    this.service.getConcert(id).subscribe(c => {
      this.concert = c;
      this.concert.urlVideo += "?rel=0&amp;autoplay=1&mute=1";
    });
  }
}


