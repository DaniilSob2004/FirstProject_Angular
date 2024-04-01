import { Component } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.css'
})
export class TextEditorComponent {
  isBold: boolean = false;
  isItalic: boolean = false;
  isUnderline: boolean = false;
  isUppercase: boolean = false;
  fontSize: number = 24;
  fontFamily: string = "Arial";
  color: string = "#000"

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
