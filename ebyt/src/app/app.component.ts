import { Component } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ebyt';
  username: string;
  authenticated = false;

  constructor(private userService: UserService, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    if (sessionStorage.getItem('username')) {
      this.username = sessionStorage.getItem('username')
      this.authenticated = true;
    }

  }
  logout() {
    this.userService.logout();
  }
}
