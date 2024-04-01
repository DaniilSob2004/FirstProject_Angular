import { Component } from '@angular/core';

import { articles } from '../static/articles'

@Component({
  selector: 'app-see-world',
  templateUrl: './see-world.component.html',
  styleUrl: './see-world.component.css'
})
export class SeeWorldComponent {
  articles: any[] = articles;
}
