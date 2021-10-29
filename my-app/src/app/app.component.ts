import { Component } from '@angular/core';

// app.component.ts start
@Component({
  selector: 'app-start', // <app-start></app-start>
  templateUrl: './app.component.html', // UI
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello Angular';
  products = ['Mobiles', 'Laptops', 'Books'];
}
// app.component.ts end

// document.write(title) = {{title}}
// {{ var / 2 + 4 }} interpollation ( Data Binding )
