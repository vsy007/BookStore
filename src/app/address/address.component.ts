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
    name: new FormControl('Vaibhav Yadav',  Validators.required),
    pin: new FormControl('411 045',  Validators.required),
    flat: new FormControl('flat no. 404, 3D building, Kul Ecoloch Society',  Validators.required),
    area: new FormControl('Nande-Mahalunge Road, Mahalunge',  Validators.required),
    city: new FormControl('Pune, Maharastra',  Validators.required)
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
