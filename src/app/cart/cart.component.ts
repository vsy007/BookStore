import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Book } from '../books';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartBooks: Book[];
  total: number;
  count: number;
  constructor(private cartService: CartService,
              private route: ActivatedRoute,
              private location: Location
             ) { }

  ngOnInit() {
    console.log("ngInit of cart component called");
    this.cartBooks = this.cartService.getBooks();
    console.log("did it reach here");
    this.total = this.cartService.addTotal();
    console.log("Total is: " + this.total);
    this.count = this.cartService.countBooks();
  }
  onClick(id: string): void {
    console.log("hi there");
    this.cartService.removeBook(id);
    console.log("got the id");
    this.total = this.cartService.addTotal();
    this.count = this.cartService.countBooks();
  }
  

}
