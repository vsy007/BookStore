import { Component, OnInit, Output, Input,EventEmitter } from '@angular/core';
import { BooksService } from '../books.service';
import {Book} from '../books';
import { CartService } from '../cart.service'


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  books = Book;
  boooks: Book[];
  @Input() search: string;
  @Output() ToBookSearch = new EventEmitter<string>();

  searchToBooks(searchString:string){
    this.ToBookSearch.emit(searchString);
  }
 
  constructor(private booksService: BooksService,
              private cartService: CartService
              ) { }

  ngOnInit() {

  }

  public getCartBookCount() : number {
    return this.cartService.countBooks();
  }
}
