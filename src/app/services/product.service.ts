import { Injectable } from '@angular/core';
import { iproduct } from '../Components/product/iproduct';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  prod : iproduct |undefined;
  products: iproduct[]=[
     { id: 1, name: "Wallpaper", price: 10000, imgUrl: "/4.jpg" },
    { id: 2, name: "image", price: 10000, imgUrl: "/4.jpg" },
    { id: 3, name: "Art", price: 10000, imgUrl: "/9.jpg" },
    { id: 4, name: "Wallpaper", price: 10000, imgUrl: "/9.jpg" },
    { id: 5, name: "Art", price: 10000, imgUrl: "/4.jpg" },
    { id: 6, name: "image", price: 10000, imgUrl: "/9.jpg" },
    { id: 7, name: "Art", price: 10000, imgUrl: "/4.jpg" },
    { id: 8, name: "image", price: 10000, imgUrl: "/9.jpg" }
  ]
 getProductById(id: Number): iproduct | undefined {
  this.prod = this.products.find(product => product.id==id);
  return this.prod;
 }
}
