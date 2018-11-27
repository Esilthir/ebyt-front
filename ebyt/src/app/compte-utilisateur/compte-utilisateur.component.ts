
import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../commande.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { Commande } from '../commande';

@Component({
  selector: 'app-compte-utilisateur',
  templateUrl: './compte-utilisateur.component.html',
  styleUrls: ['./compte-utilisateur.component.css']
})
export class CompteUtilisateurComponent implements OnInit {

  listCommande : Array<Commande> = new Array();

  constructor( private commandeService: CommandeService, private cartService: CartService, private router : Router ) { }

  ngOnInit() {
    this.commandeService.getCommandesUser().subscribe( (c) => {
    this.listCommande = c ;
    })
  } 
}
