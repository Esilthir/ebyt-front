
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Commande } from '../commande';
import { CommandeService } from '../commande.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
=======
import { CommandeService } from '../commande.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { Commande } from '../commande';
>>>>>>> f388eb5550ef2ee126e715c81706dc40fe49faf3

@Component({
  selector: 'app-compte-utilisateur',
  templateUrl: './compte-utilisateur.component.html',
  styleUrls: ['./compte-utilisateur.component.css']
})
export class CompteUtilisateurComponent implements OnInit {

  listCommande : Array<Commande> = new Array();

  constructor( private commandeService: CommandeService, private cartService: CartService, private router : Router ) { }

  ngOnInit() {
<<<<<<< HEAD
    this.commandeService.getCommandes().subscribe( (c) => {
      console.log(c);
      this.listCommande = c ;
    } 
  )}
=======
    this.commandeService.getCommandesUser().subscribe( (c) => {
    this.listCommande = c ;
    })
  } 
>>>>>>> f388eb5550ef2ee126e715c81706dc40fe49faf3
}
