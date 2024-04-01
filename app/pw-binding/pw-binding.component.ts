import { Component } from '@angular/core';

@Component({
  selector: 'app-pw-binding',
  templateUrl: './pw-binding.component.html',
  styleUrl: './pw-binding.component.css'
})
export class PwBindingComponent {
  userName: string = "";
  isVisible: boolean = true;

  constructor() {
    this.userName = "Daniil";
  }

  showEvent(event: Event): void {
    console.log(event);
  }

  toggleP() {
    this.isVisible = !this.isVisible;
  }
}
