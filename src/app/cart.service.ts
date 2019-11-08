import { Injectable } from '@angular/core';
import { Book } from './books';
import { BOOKS } from './book-list'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  books: Book[] = [];
  constructor() { }

  public addBook(id: string): void {
    let selectedBook = null;
    for (let i = 0; i < Object.keys(BOOKS).length; i++) {
      let book: Book = BOOKS[i];
      if (book.id === id) {
        selectedBook = book;
      }
    }
    this.books.push(selectedBook);
  }
  getBooks() {
    return this.books;
  }

  public removeBook(id: string): void {
    console.log(id);
    let selectedBookIndex;
    for (let i=0;i<Object.keys(this.books).length;i++){
      let book: Book = this.books[i];
      if(book.id === id){
        selectedBookIndex = i;
        console.log(selectedBookIndex);
      }
    }
     this.books.splice(selectedBookIndex,1);
  }

  public addTotal(): number {
    let total: number = 0;
    for ( let i=0;i<Object.keys(this.books).length;i++){
      let book: Book = this.books[i];
      total += (book.price)
      
    }
    return total;
  }
   

  public countBooks(): number {
    let count: number = 0;
      count = Object.keys(this.books).length;
    return count;
  }

  }





