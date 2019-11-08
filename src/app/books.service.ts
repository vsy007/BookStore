import { Injectable } from '@angular/core';
import {Book} from './books';
import { BOOKS} from './book-list'

@Injectable({
  providedIn: 'root'
})
export class BooksService {
    books: Book[] = [];
    getBooks(): Book[]{
      return  this.books;
    }
    
  constructor() { 
    this.books=BOOKS;
  }


  public getBook(id:string): Book {
    for(let i = 0; i < Object.keys(BOOKS).length; i++) {
      let book:Book = BOOKS[i];
      if(book.id === id) {
        return book;
      }
    }
    return null;
  }
 
      
    
}
