import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { CommandeService } from '../commande.service';
import { Command } from 'selenium-webdriver';
import { Commande } from '../commande';

@Component({
  selector: 'app-liste-commande-admin',
  templateUrl: './liste-commande-admin.component.html',
  styleUrls: ['./liste-commande-admin.component.css']
})
export class ListeCommandeAdminComponent implements OnInit {

   listCommande : Array<Commande> = new Array();

  constructor( private commandeService: CommandeService, private cartService: CartService, private router : Router ) { }

  ngOnInit() {
    this.commandeService.getCommandes().subscribe( (c) => {
      this.listCommande = c ;
    } 
  )}
}
