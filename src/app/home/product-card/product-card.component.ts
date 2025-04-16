import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { ProductService,Product } from '../../services/product.service';


@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

products = input.required<Product[]>();
}
