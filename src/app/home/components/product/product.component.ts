import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
interface Product {
  image: string;
  productName: string;
  productPrice: number;
  onSale: boolean;
}
@Component({
  selector: 'app-product',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() products: Product[] = [];
}
