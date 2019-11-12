import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressDetails } from '../address-details';
import { UserAddressService } from '../user-address.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  addressForm = new FormGroup({
    name: new FormControl('',  [Validators.required, Validators.minLength(3)]),
    pin: new FormControl('',  [Validators.required, Validators.minLength(6)]),
    flat: new FormControl('',  [Validators.required, Validators.minLength(3)]),
    area: new FormControl('', [Validators.required, Validators.minLength(5)]),
    city: new FormControl('',  [Validators.required, Validators.minLength(3)])
  });
  addressData: AddressDetails;
  constructor(  private router: Router,
                private userAddressService: UserAddressService                    
             ) { }

  ngOnInit() {
  }
onSubmit(){
  let userAddress = this.addressForm.value;
  this.userAddressService.fromJson(userAddress);
  this.router.navigate(['orders']);
}
}
