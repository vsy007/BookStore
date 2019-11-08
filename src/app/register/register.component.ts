import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterDetails } from '../register-details';
import { UserDataService } from '../user-data.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm = new FormGroup({
    name: new FormControl('Vaibhav', Validators.required),
    mobile: new FormControl('9960130707', Validators.required),
    password: new FormControl('vaibhav@2020', [Validators.required, Validators.minLength(6)])
  });
  
 
  constructor(private userDataService: UserDataService,
              private router: Router) { }
  
  
  Users: RegisterDetails[];
  ngOnInit() {
  } 
  
  onSubmit(){
    console.warn(this.loginForm.value);
    let loginData = this.loginForm.value;
    this.userDataService.fromJson(loginData);
    this.Users=this.userDataService.getData();
    console.log(this.Users);
    this.router.navigate(['login']);

  }
 
}

