import { Component, OnInit } from '@angular/core';
import { Book } from '../books';
import { CartService } from '../cart.service';
import { UserAddressService } from '../user-address.service';
import { AddressDetails } from '../address-details'


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],

})
export class OrdersComponent implements OnInit {
  orderBooks: Book[];
  userAddress: AddressDetails[];
  total: number;
  constructor(
             private cartService : CartService,
             private userAddressService: UserAddressService
             ) { }

  ngOnInit() {
    this.orderBooks=this.cartService.getBooks();
    console.log("reached to orderBook");
    console.log(this.orderBooks);
    this.total = this.cartService.addTotal();
    this.userAddress = this.userAddressService.getData();
  }
  
}
