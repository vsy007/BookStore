import { Injectable } from '@angular/core';
import { AddressDetails } from './address-details';

@Injectable({
  providedIn: 'root'
})
export class UserAddressService {
  userAddress : AddressDetails[] = [];
  fromJson(delievaryAddress: AddressDetails){
    this.userAddress.push(delievaryAddress);
  }
  constructor() { }
}
