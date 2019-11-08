import { Injectable } from '@angular/core';
import {Book} from './books';
import {bestBooks} from './best-sellers';

@Injectable({
  providedIn: 'root'
})
export class BestBooksService {
  bestSellerBooks: Book[] = [];
  getBooks(): Book[]{
    return  this.bestSellerBooks;
  }
  constructor() {
    this.bestSellerBooks=bestBooks }
}
