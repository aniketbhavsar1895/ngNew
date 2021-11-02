import { PRODUCTS } from './data/products-data';
import { Component } from '@angular/core';

import { Products } from './model/products';

// app.component.ts start
@Component({
  selector: 'app-start', // <app-start></app-start>
  templateUrl: './app.component.html', // UI
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Hello Angular';
  products: Products[] = PRODUCTS;

  calcProd() {
    let sum: any = 0;
    for (let prod of this.products) {
      sum = sum + prod.inStock;
    }
    return sum;
  }
}
// app.component.ts end

// document.write(title) = {{title}}
// {{ var / 2 + 4 }} interpollation ( Data Binding )
