import { Component, OnInit } from '@angular/core';
import { Book } from '../books';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orderBooks: Book[];
  total: number;
  constructor(
             private cartService : CartService,
             ) { }

  ngOnInit() {
    this.orderBooks=this.cartService.getBooks();
    console.log("reached to orderBook");
    console.log(this.orderBooks);
    this.total = this.cartService.addTotal();
  }
  
}
