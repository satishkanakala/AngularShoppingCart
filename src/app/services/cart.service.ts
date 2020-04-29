import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = [];
  totalAmount;
  constructor(private router: Router) {

  }

  addItemsToCart = (product) => {
    let productExists = false;
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === product.id) {
        this.cartItems[i].quantity++;
        productExists = true;
        this.getTotalAmount();
        break;
      }
    }
    if (!productExists) {
      this.cartItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        discount: product.discount,
        quantity: 1,
        img_url: product.img_url
      });
    }
    this.getTotalAmount();
  }

  getTotalAmount() {
    if (this.cartItems) {
      this.totalAmount = 0;
      this.cartItems.forEach((item) => {
        this.totalAmount += (item.quantity * (item.price - (item.price * item.discount / 100)));
      });
      return this.totalAmount;
    }
  }

  getItemsFromCart = () => {
    return this.cartItems;
  }
  getCartCount = () => {
    // if (this.cartItems) {
    //   // return this.cartItems.length;
    //   const initialValue = 0;
    //   let cartCount = this.cartItems.reduce((totatl, current) => totatl + current.quantity, initialValue);
    //   return cartCount;
    // }
    if (this.cartItems) {
      let cartCount = 0;
      this.cartItems.forEach((item) => {
        cartCount += item.quantity;
      });
      return cartCount;
    }
  }

  clearCart = () => {
    this.cartItems = [];
    this.router.navigate(['']);
  }

  removeFromCart = (product) => {
    this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
    if (this.cartItems.length === 0) {
      this.router.navigate(['']);
    }
    this.getTotalAmount();
  }

  decrementFromCart = (product) => {
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === product.id) {
        if (this.cartItems[i].quantity === 0) {
          this.removeFromCart(product);
        } else {
          this.cartItems[i].quantity--;
        }
        this.getTotalAmount();
        break;
      }
    }
    this.getTotalAmount();
  }
  getProductList = () => {
    return [
      // tslint:disable-next-line: no-unused-expression
      {
        "id": "9090",
        "name": "Item1",
        "price": 200,
        "discount": 10,
        "category": "fiction",
        "img_url": "http://lorempixel.com/500/600/technics/"
      },
      {
        "id": "9091",
        "name": "Item2",
        "price": 250,
        "discount": 15,
        "category": "literature",
        "img_url": "http://lorempixel.com/500/600/technics/"
      },
      {
        "id": "9092",
        "name": "Item3",
        "price": 320,
        "discount": 5,
        "category": "literature",
        "img_url": "http://lorempixel.com/500/600/technics/"
      },
      {
        "id": "9093",
        "name": "Item4",
        "price": 290,
        "discount": 0,
        "category": "thriller",
        "img_url": "http://lorempixel.com/500/600/technics/"
      },
      {
        "id": "9094",
        "name": "Item1",
        "price": 500,
        "discount": 25,
        "category": "thriller",
        "img_url": "http://lorempixel.com/500/600/technics/"
      },
      {
        "id": "9095",
        "name": "Item2",
        "price": 150,
        "discount": 5,
        "category": "literature",
        "img_url": "http://lorempixel.com/500/600/technics/"
      },
      {
        "id": "9096",
        "name": "Item3",
        "price": 700,
        "discount": 22,
        "category": "literature",
        "img_url": "http://lorempixel.com/500/600/technics/"
      },
      {
        "id": "9097",
        "name": "Item4",
        "price": 350,
        "discount": 18,
        "category": "fiction",
        "img_url": "http://lorempixel.com/500/600/technics/"
      }
    ];
  }
}
