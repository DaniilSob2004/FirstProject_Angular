import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  books: any[] = [
    {
      title: "Бегущий в лабиринте",
      year: 2000,
      price: 199,
      img: "assets/images/book1.jpg",
      author: "Thomas"
    },
    {
      title: "Шерлок Холмс",
      year: 1999,
      price: 899,
      img: "assets/images/book2.jpg",
      author: "Bob"
    },
    {
      title: ".Net Framework",
      year: 2015,
      price: 349,
      img: "assets/images/book3.jpg",
      author: "Daniil"
    },
    {
      title: "C++",
      year: 2010,
      price: 99,
      img: "assets/images/book4.jpg",
      author: "Andrey"
    },
  ];
  selectedBook: any = this.books[0];

  choice(book: any) {
    if (book && book !== this.selectedBook)
    {
      this.selectedBook = book; 
    }
  }
}
