import { Component } from '@angular/core';

import { pets } from '../../static/pets'

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export class PetsComponent {
  pets: any[] = pets;

  getAge(birthYear: number): string {
    const curYear = new Date().getFullYear();  // текущий год
    return (birthYear !== curYear) ?
      (curYear - birthYear).toString() :  // возраст
      "not a year old yet";
  }
}
