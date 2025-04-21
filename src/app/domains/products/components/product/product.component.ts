import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() img: string = '';
  @Input() price: number = 0;
  @Input() title: string = '';

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    console.log('click from child');
    this.addToCart.emit({
      title: this.title,
      price: this.price,
      img: this.img
    });
  }
}
