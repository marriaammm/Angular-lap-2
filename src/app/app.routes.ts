import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './home/Products/All-products/products.component';
import { AppProductDetailComponent } from './home/Products/app-product-detail/app-product-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/:id', component: AppProductDetailComponent },
    { path: '**', redirectTo: '/home' } 
];