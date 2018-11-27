
import { Component, OnInit } from '@angular/core';
import { Commande } from '../commande';
import { CommandeService } from '../commande.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compte-utilisateur',
  templateUrl: './compte-utilisateur.component.html',
  styleUrls: ['./compte-utilisateur.component.css']
})
export class CompteUtilisateurComponent implements OnInit {

  listCommande : Array<Commande> = new Array();

  constructor( private commandeService: CommandeService, private cartService: CartService, private router : Router ) { }

  ngOnInit() {
    this.commandeService.getCommandes().subscribe( (c) => {
      console.log(c);
      this.listCommande = c ;
    } 
  )}
}
