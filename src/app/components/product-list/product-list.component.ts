import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productListItems;
  cartItemsLength;
  serchParam;

  constructor(public cartService: CartService) {
    this.productListItems = this.cartService.getProductList();
  }

  ngOnInit(): void {
  }

  handelAddToCart = (product) => {
    this.cartService.addItemsToCart(product);
  }
  sortHtoL = () => {
    this.productListItems.sort( (a, b) => {
      return b.price - a.price;
    });
  }

  sortLtoH = () => {
    this.productListItems.sort( (a, b) => {
      return a.price - b.price;
    });
  }

}
