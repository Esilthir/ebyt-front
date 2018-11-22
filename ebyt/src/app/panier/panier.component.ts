import { Component, OnInit } from '@angular/core';
import { Concert } from '../concert';
import { observable, Observable } from 'rxjs';
import { PanierServiceService } from '../panier-service.service';
import { Panier } from '../panier';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  panier : Panier;
  constructor( private panierService: PanierServiceService ) { }

  ngOnInit() {
    this.panier = this.panierService.getPanier();

  }



}
