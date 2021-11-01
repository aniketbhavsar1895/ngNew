import { Component } from '@angular/core';

// app.component.ts start
@Component({
  selector: 'app-start', // <app-start></app-start>
  templateUrl: './app.component.html', // UI
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello Angular';
  products = [
    { id: 1001, name: 'mobile', price: 1200, inStock: 80 },
    { id: 1002, name: 'Laptop', price: 1500, inStock: 0 },
    { id: 1003, name: 'BOOKS', price: 1800, inStock: 10 },
  ];
}
// app.component.ts end

// document.write(title) = {{title}}
// {{ var / 2 + 4 }} interpollation ( Data Binding )
