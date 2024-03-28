import { Component } from '@angular/core';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrl: './provider.component.css'
})
export class ProviderComponent {
  public names: string[];

  constructor() {
    this.names = [
      "Матрица",
      "Начало",
      "Зеленая миля",
      "Дюна",
      "Брат",
      "Брат 2",
      "Интерстеллар",
    ];
  }
}
