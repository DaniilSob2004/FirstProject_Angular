import { Component } from '@angular/core';

@Component({
  selector: 'app-test-pipe',
  templateUrl: './test-pipe.component.html',
  styleUrl: './test-pipe.component.css'
})
export class TestPipeComponent {
  products: any[] = [
    {
      name: "Potato",
      description: "Cool",
      price: 50
    },
    {
      name: "Cheesse",
      description: "Good",
      price: 150
    },
    {
      name: "Milk",
      description: "Cool",
      price: 80
    },
    {
      name: "Coffee",
      description: "Good",
      price: 55
    },
    {
      name: "Tea",
      description: "Cool",
      price: 25
    },
    {
      name: "Banana",
      description: "Good",
      price: 79
    }
  ];
  search: string = "";
  selectedOption: string = "name";
}
