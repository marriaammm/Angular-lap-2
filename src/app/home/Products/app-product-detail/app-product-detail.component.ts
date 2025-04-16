import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product, ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-app-product-detail',
  imports: [RouterLink],
  templateUrl: './app-product-detail.component.html',
  styleUrl: './app-product-detail.component.css'
})
export class AppProductDetailComponent {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(id);
  }
}
