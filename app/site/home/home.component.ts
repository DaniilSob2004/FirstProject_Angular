import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users: string[] = [
    "Daniil",
    "Andrey",
    "Thomas",
    "Rogger"
  ];

  products: any[] = [
    {
      title: "Iphone",
      price: 25000,
      resolution: 1200
    },
    {
      title: "Samsung",
      price: 12500,
      resolution: 1000
    },
    {
      title: "Xiaomi",
      price: 7000,
      resolution: 1500
    }
  ];

  productsEmpty: any[] = [];

  show(index: number) {
    alert(index);
  }
}
