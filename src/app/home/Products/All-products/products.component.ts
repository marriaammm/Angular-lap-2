import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product, ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  jewelryProducts: Product[] = [];
  onSaleProducts: Product[] = [];
  products: Product[] = [];
constructor(private productService: ProductService) {}

ngOnInit(): void {
  this.jewelryProducts = this.productService.getJewelryProducts();
  this.onSaleProducts = this.productService.getOnSaleProducts();
  this.products = this.productService.getProducts();
}

}
