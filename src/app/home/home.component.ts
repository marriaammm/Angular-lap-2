import { Component } from '@angular/core';
import { CategoryComponent } from './components/category/category.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,CategoryComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories = [
    {
      name: 'Clothing',
      image: 'Images/c.png',
      description: 'Shirts, pants, and more.'
    },
    {
      name: 'Electronics',
      image: 'Images/v.jpg',
      description: 'Phones, laptops, gadgets.'
    },
    {
      name: 'Home & Kitchen',
      image: 'Images/d.jpg',
      description: 'Decor and appliances.'
    }
  ];
}
