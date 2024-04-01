import { Component } from '@angular/core';

import { articlesDeals } from '../static/articles';

@Component({
  selector: 'app-deals-dest',
  templateUrl: './deals-dest.component.html',
  styleUrl: './deals-dest.component.css'
})
export class DealsDestComponent {
  articles: any[] = articlesDeals;
}
