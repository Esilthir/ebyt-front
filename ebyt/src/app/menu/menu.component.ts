import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  role: string;
  authenticated: boolean;

  constructor(private userService: UserService) {
    
   }

  ngOnInit() {
    this.role = sessionStorage.getItem('role');
    if(sessionStorage.getItem('username')) {
      this.authenticated = true;
    }
  }

  logout() {
    this.userService.logout();
  }

}
