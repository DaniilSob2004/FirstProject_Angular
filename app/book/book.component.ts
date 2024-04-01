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
      img: "assets/img/book1.png",
      author: "Thomas"
    },
    {
      title: "Шерлок Холмс",
      year: 1999,
      img: "assets/img/book2.png",
      author: "Bob"
    },
    {
      title: ".Net Framework",
      year: 2015,
      img: "assets/img/book3.png",
      author: "Daniil"
    },
    {
      title: "C++",
      year: 2010,
      img: "assets/img/book4.png",
      author: "Andrey"
    },
  ];
  selectedBook: any = this.books[0];
}
