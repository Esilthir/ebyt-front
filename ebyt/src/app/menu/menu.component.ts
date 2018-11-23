import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Item } from '../item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  role: string;
  authenticated: boolean;
  lastname: string;
  firstname: string;
  items:MenuItem[];
  afficherPanier:boolean;
  cart: Array<Item>;
  id:string;
  

  constructor(private userService: UserService, private panierService: CartService) {
    userService.identifiant$.subscribe(() => {
      if (sessionStorage.getItem('username')){
        this.authenticated = true;
        this.role = sessionStorage.getItem('role');
        this.firstname = sessionStorage.getItem('firstname');
        this.lastname = sessionStorage.getItem('lastname');
        this.id = sessionStorage.getItem('id');
      }
    })
   }

  ngOnInit() {
    this.role = sessionStorage.getItem('role');
    this.cart = this.panierService.loadCart();
    if(sessionStorage.getItem('username')) {
      this.authenticated = true;
      this.firstname = sessionStorage.getItem('firstname');
      this.lastname = sessionStorage.getItem('lastname');
      this.afficherPanier = false;
      this.id = sessionStorage.getItem('id');
    }
    this.items = [
      {label: 'Concerts', routerLink: ['/admin/concerts']
      },
      {label: 'Users', routerLink: ['/admin/users']
      },
      {label: 'Commandes', routerLink: ['/admin/commandes']},
  ];
  }


  logout() {
    this.userService.logout();
    this.authenticated = false;
    this.role = null;
  }

}
