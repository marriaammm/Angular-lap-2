import { Component } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './Products/product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CategoryComponent, ProductCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  categories: any[] = [];

  onSaleProducts: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.onSaleProducts = this.productService.getOnSaleProducts();
    this.onSaleProducts = this.onSaleProducts.slice(0, 4);
    this.categories = this.productService.getProductCategories();
  }
}