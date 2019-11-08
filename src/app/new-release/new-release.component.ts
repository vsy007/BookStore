import { Component, OnInit } from '@angular/core';
import { Book } from '../books';
import { newBooks } from '../new-release';
import { NewBooksService} from '../new-books.service'
@Component({
  selector: 'app-new-release',
  templateUrl: './new-release.component.html',
  styleUrls: ['./new-release.component.css']
})
export class NewReleaseComponent implements OnInit {
  books=Book;  
  newBooks: Book[];
  constructor(private newBooksService: NewBooksService) { }

  ngOnInit() {
    this.getnewBook();
  }

   getnewBook(){
     this.newBooks=this.newBooksService.getBooks();
   }
}
