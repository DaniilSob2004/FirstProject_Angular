import { Component } from '@angular/core';

@Component({
  selector: 'app-choice-iphone',
  templateUrl: './choice-iphone.component.html',
  styleUrl: './choice-iphone.component.css'
})
export class ChoiceIphoneComponent {
  colors: string[] = [
    "pink",
    "yellow",
    "greenyellow",
    "lightblue",
    "black"
  ];
  choiceColor: string = this.colors[0];

  choice(color: string) {
    if (this.choiceColor !== color) {
      this.choiceColor = color;
    }
  }
}
