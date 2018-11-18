import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  model: {
    username: string,
    password: string
  }

  error: String;

  constructor(private userService: UserService, private router: Router) {
    this.model = {
      username: null,
      password: null
    };
   }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.authenticate(this.model, ()=>
      this.router.navigateByUrl("/"), () => 
      this.error = "Mauvais identifiants");
  }

}
