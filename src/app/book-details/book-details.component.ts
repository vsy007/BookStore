import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Book} from '../books';
import { BooksService }  from '../books.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book;
  count: number;

  constructor( 
    private cartService: CartService,
    private route: ActivatedRoute,
    private booksService: BooksService,
    private location: Location) { }
  
 loadBook(): void {
   let id:string = this.route.snapshot.paramMap.get('id');
   console.log("BOOK ID: " + id);
   this.book = this.booksService.getBook(id);
  }
  ngOnInit() {
    this.loadBook();
    this.count = this.cartService.countBooks();
  }
  onClick(): void {
    let id:string = this.route.snapshot.paramMap.get('id');
    this.cartService.addBook(id);
    this.count = this.cartService.countBooks();
    console.log("ngOnInit");
    var x = document.getElementById("changeText").innerText;
    if (x=="Add to The Cart") {
        document.getElementById("changeText").innerText  = "Added!";
    }
    else {
        document.getElementById("changeText").innerText  = "Add to Cart";
    }
    console.warn("book added successfully");
   
  }
  }


