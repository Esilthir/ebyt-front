import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { MenuItem } from 'primeng/components/common/menuitem';

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

  

  constructor(private userService: UserService) {
    userService.identifiant$.subscribe(() => {
      if (sessionStorage.getItem('username')){
        this.authenticated = true;
        this.role = sessionStorage.getItem('role');
        this.firstname = sessionStorage.getItem('firstname');
        this.lastname = sessionStorage.getItem('lastname');
      }
    })
   }

  ngOnInit() {
    this.role = sessionStorage.getItem('role');
    if(sessionStorage.getItem('username')) {
      this.authenticated = true;
      this.firstname = sessionStorage.getItem('firstname');
      this.lastname = sessionStorage.getItem('lastname');
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
