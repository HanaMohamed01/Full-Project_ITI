import { Component, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnDestroy {
  cartItemCount: number = 0;
  private cartSubscription: Subscription;

  constructor(public cartServ: CartService) {
    this.cartSubscription = this.cartServ.cartItems$.subscribe(items => {
      this.cartItemCount = items.length;
    });
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }
}
