import { Component } from '@angular/core';

import { books } from '../static/books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  books: any[] = books;
  selectedBook: any = this.books[0];

  choice(book: any) {
    if (book && book !== this.selectedBook)
    {
      this.selectedBook = book; 
    }
  }
}
