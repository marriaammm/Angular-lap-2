import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
products:Product[] =[];
constructor(private productService: ProductService) {}
ngOnInit(): void {
  this.products = this.productService.getProducts();
}
}
