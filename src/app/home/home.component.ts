import { Component } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [NavBarComponent,ProductComponent,CategoryComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products = [
    {
      image: 'Images/d.jpg',
      productName: 'Product 1',
      productPrice: 29.99,
      onSale: true
    },
    {
      image: 'Images/c.png',
      productName: 'Product 2',
      productPrice: 49.99,
      onSale: false
    },
    {
      image: 'Images/v.jpg',
      productName: 'Product 3',
      productPrice: 19.99,
      onSale: true
    }
  ];
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
