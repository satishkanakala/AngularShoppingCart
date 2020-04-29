import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [];
  cartTotalValue;
  serchParam;

  constructor(public cartService: CartService) {
    this.cartItems = this.cartService.getItemsFromCart();
  }

  ngOnInit(): void {
    this.cartTotalValue =  this.cartService.getTotalAmount();
  }

  handelRemoveItem = (product) => {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.getItemsFromCart();
    this.cartTotalValue =  this.cartService.getTotalAmount();
  }

  handleIncrement = (product) => {
    this.cartService.addItemsToCart(product);
    this.cartTotalValue =  this.cartService.getTotalAmount();
  }

  handleDecriment = (product) => {
    this.cartService.decrementFromCart(product);
    this.cartTotalValue =  this.cartService.getTotalAmount();
  }
}
