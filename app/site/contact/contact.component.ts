import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isVisible: boolean = false;

  showMap() {
    this.isVisible = !this.isVisible;
  }
}
