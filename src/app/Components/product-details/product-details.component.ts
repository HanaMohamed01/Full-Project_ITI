import { Component } from '@angular/core';
import { iproduct } from '../product/iproduct';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product : iproduct | undefined;
  id : Number | null=0;


  constructor(prodSer : ProductService, rout: ActivatedRoute, public cartser:CartService){
    this.id = Number(rout.snapshot.paramMap.get("id"));
    this.product= prodSer.getProductById(this.id)
  }
 
  addToCart(product: iproduct | undefined) {
    if (product) {
      this.cartser.addItem(product);
      alert("Added to cart successfully!");
      console.log('Added to cart:', product);
    }
  }
}
