import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService,Product } from '../../services/product.service';


@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit{
products:Product[] =[];
constructor(private productService: ProductService) {}
ngOnInit(): void {
  this.products = this.productService.getProducts();
}
// products = input.required<Product[]>();
}
