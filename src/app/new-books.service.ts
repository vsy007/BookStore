import { Injectable } from '@angular/core';
import {Book} from './books';
import { newBooks} from './new-release';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewBooksService {
  
  newReleaseBooks: Book[] = []
  getBooks(): Book[]{
    return  this.newReleaseBooks;
  }

  constructor() {
    this.newReleaseBooks=newBooks;
   }
}
