import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

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
  constructor(private userService: UserService, private router: Router) {
    this.model = {
      username: null,
      password: null
    };
   }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
    this.userService.authenticate(this.model, ()=>
      this.router.navigateByUrl("/"));
  }

}
