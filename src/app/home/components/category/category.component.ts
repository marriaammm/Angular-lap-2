import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Category {
  name: string;
  image: string;
  description: string;
}
@Component({
  selector: 'app-category',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  @Input() categories: Category[] = [];
}
