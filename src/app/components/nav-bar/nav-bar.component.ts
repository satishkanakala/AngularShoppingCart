import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  cartItemsLength;
  constructor(public cartService: CartService) {
    this.cartItemsLength = this.cartService.getCartCount();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.cartItemsLength = this.cartService.getCartCount();
      console.log(this.cartItemsLength);
    }, 200);
  }

}
