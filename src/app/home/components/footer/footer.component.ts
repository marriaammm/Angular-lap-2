import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() logo: string = '';
  currentYear: number = new Date().getFullYear(); 
}
