import { Injectable } from '@angular/core';
import { iproduct } from '../Components/product/iproduct';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemsSubject = new BehaviorSubject<iproduct[] | any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() { }

  getAll() {
    return this.cartItemsSubject.getValue();
  }

  getCartItemCount() {
    return this.cartItemsSubject.getValue().length;
  }

  addItem(item: iproduct | any) {
    const currentItems = this.cartItemsSubject.getValue();
    // Check if item already exists in cart
    const existingItem = currentItems.find((cartItem: iproduct) => cartItem.id === item.id);
    if (!existingItem) {
      this.cartItemsSubject.next([...currentItems, item]);
    } else {
      console.log('Item already exists in cart:', item.name);
    }
  }

  removeItem(item: iproduct) {
    const currentItems = this.cartItemsSubject.getValue();
    const updatedItems = currentItems.filter((cartItem: iproduct) => cartItem.id !== item.id);
    this.cartItemsSubject.next(updatedItems);
  }

  removeCart(): iproduct[] | any {
    this.cartItemsSubject.next([]);
    return [];
  }
}
