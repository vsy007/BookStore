import { Component, OnInit } from '@angular/core';
import {Book} from '../books';
import { BooksService } from '../books.service';




@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books = Book;
  boooks: Book[];
  searchTerm: string;
     

    getSearchTerm(searchString:string){
        if(searchString){
          this.searchTerm = searchString;
        }
    }

  constructor(private booksService: BooksService,
              ) { }

  ngOnInit() {
    this.getBooks();
  }
  getBooks(): void {
    this.boooks = this.booksService.getBooks();
    console.log(this.boooks);
  }
}
