import { Injectable } from '@angular/core';
import { iproduct } from '../Components/product/iproduct';
@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  private products: iproduct[] = [
    { id: 1, name: "Wallpaper", price: 10000, imgUrl: "/4.jpg" },
    { id: 2, name: "image", price: 10000, imgUrl: "/4.jpg" },
    { id: 3, name: "Art", price: 10000, imgUrl: "/9.jpg" },
    { id: 4, name: "Wallpaper", price: 10000, imgUrl: "/9.jpg" },
    { id: 5, name: "Art", price: 10000, imgUrl: "/4.jpg" },
    { id: 6, name: "image", price: 10000, imgUrl: "/9.jpg" },
  ];
  getAllProducts(): iproduct[] {
    return this.products;
  }
  getProductbyId(id: number): iproduct | undefined {
    return this.products.find(product => product.id === id);
  }
}
