import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.css']
})
export class UserReactiveFormComponent implements OnInit {
	userForm = this.fb.group({
		username: ['', Validators.required],
		password: ['', Validators.required],
		lastname: ['', Validators.required], 
		firstname: ['', Validators.required],
	});

	add: boolean;
	id: number;

	constructor(private fb: FormBuilder, private serviceUser: UserService, private router: Router, private routeActive: ActivatedRoute) { }

	ngOnInit() {
		if( this.routeActive.snapshot.paramMap.get('id') === null){
			this.add = true;
		}
		else{
			this.add = false;
			this.id = parseInt(this.routeActive.snapshot.paramMap.get('id'));
			this.serviceUser.getUser(parseInt(this.routeActive.snapshot.paramMap.get('id'))).subscribe(u => this.userForm.setValue({
				username: u.username, 
				password: "",
				lastname: u.lastname, 
				firstname: u.firstname,
			}));
		}
	}

	onSubmit(){
		let user: User = new User();
		user.username = this.userForm.value.username;
		user.password = this.userForm.value.password;
		user.lastname = this.userForm.value.lastname;
		user.firstname = this.userForm.value.firstname;
		if(this.add){
			this.serviceUser.addUser(user);
		}
		else{
			user.id = this.id;
			this.serviceUser.updateUser(user);
		}
	}
}
