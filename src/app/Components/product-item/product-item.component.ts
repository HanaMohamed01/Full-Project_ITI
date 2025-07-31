import { Component, EventEmitter, Input, Output } from '@angular/core';
import { iproduct } from '../product/iproduct';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item',
  imports: [RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product : iproduct |any;
  @Output() add = new EventEmitter<any>(); 

  
  constructor(public cartServ : CartService) {
  }
   addToCart(product:iproduct){
    this.add.emit(product);
    alert("Added Successfully");
    console.log(product);
  }
}
