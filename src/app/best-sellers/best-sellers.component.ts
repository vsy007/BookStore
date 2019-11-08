import { Component, OnInit } from '@angular/core';
import { Book } from '../books';
import { BestBooksService } from '../best-books.service'

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.css']
})
export class BestSellersComponent implements OnInit {
  books=Book;
  bestBooks: Book[];

  constructor(private bestBooksService: BestBooksService) { }

  ngOnInit() {
    this.getbestBooks();
    console.log("books:" + this.bestBooks);
  }
 
 getbestBooks(): void{
   this.bestBooks =this.bestBooksService.getBooks();
 }
}
