import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './books'

@Pipe({
  name: 'bookFilter',
  pure: false
})
export class BookFilterPipe implements PipeTransform {

  transform(boooks: Book[], searchTerm: string): Book[] {
    console.log("transform method called");
    if(!boooks || !searchTerm){
      return boooks;
    }
    console.log("Books or search term is not empty");
    return boooks.filter(book=>
      book.caption.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
