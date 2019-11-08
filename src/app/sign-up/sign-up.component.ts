import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterDetails } from '../register-details';
import { UserDataService } from '../user-data.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router'


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup({
    mobile: new FormControl('9960130707', Validators.required),
    password: new FormControl('vaibhav@2020', [Validators.required, Validators.minLength(6)])
  });
  
  constructor(private userDataService: UserDataService,
              private router: Router) { }

  ngOnInit() {
  
  }
 dataToValidation(): void{
   let mobile = this.signUpForm.value.mobile;
   let password = this.signUpForm.value.password;
   let isValid: boolean = this.userDataService.isValidUser(mobile,password);
   if(isValid){
     this.router.navigate(['address']);
   }else{
     console.warn("Mobile And/Or password is incorrect");
   }
 }

}
