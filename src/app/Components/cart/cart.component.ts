import { Component, OnDestroy } from '@angular/core';
import { iproduct } from '../product/iproduct';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnDestroy {
  cartItems: iproduct[] | any[] = [];
  private cartSubscription: Subscription;

  constructor(public cartServ: CartService) {
    this.cartSubscription = this.cartServ.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }



  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

  clearCart() {
    this.cartItems = this.cartServ.removeCart();
  }

  removeItem(item: iproduct) {
    this.cartServ.removeItem(item);
  }
}
