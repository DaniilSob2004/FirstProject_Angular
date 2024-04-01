import { Component } from '@angular/core';

@Component({
  selector: 'app-pw-binding',
  templateUrl: './pw-binding.component.html',
  styleUrl: './pw-binding.component.css'
})
export class PwBindingComponent {
  userName: string = "";
  isVisible: boolean = true;
  isBold: boolean = false;
  isItalic: boolean = false;
  isUnderline: boolean = false;
  isUppercase: boolean = false;
  fontSize: number = 32;
  fontFamily: string = "Arial";
  color: string = "#000"

  constructor() {
    this.userName = "Daniil";
  }

  showEvent(event: Event): void {
    console.log(event);
  }

  toggleP() {
    this.isVisible = !this.isVisible;
  }

  bold() {
    this.isBold = !this.isBold;
  }

  italic() {
    this.isItalic = !this.isItalic;
  }

  underline() {
    this.isUnderline = !this.isUnderline;
  }

  uppercase() {
    this.isUppercase = !this.isUppercase;
  }
}
