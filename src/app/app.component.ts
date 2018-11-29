import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  carPart = {
    'id': 1,
    'name' : 'Super Tires',
    'description': 'These tires are the very best',
    'inStock': 5
  };

  constructor() {
    // console.log('AppComponent Constructor is called');
  }
}
