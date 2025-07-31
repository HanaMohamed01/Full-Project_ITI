import { Component } from '@angular/core';
import { iproduct } from './iproduct';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  imports: [CommonModule,ProductItemComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  // products:[{}]
  
  products : iproduct[] = []
  constructor(productservice: ProductService, public cartServ : CartService){
      this.products=productservice.products;
  }
 
   handleAddToCart(product: any) {
    this.cartServ.addItem(product);
    console.log('Added to cart:', product);
  }
  
}
