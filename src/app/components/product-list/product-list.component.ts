import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Options } from 'ng5-slider';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productListItems;
  cartItemsLength;
  serchParam;
  sliderValue;
  // minValue: number = 0;
  // maxValue: number = 500;
  // options: Options = {
  //   floor: 0,
  //   ceil: 500,
  //   translate: (value: number): string => {
  //     this.sliderValue = value;
  //     return '$' + value;
  //   }
  // };

  constructor(public cartService: CartService) {
    this.productListItems = this.cartService.getProductList();
    console.log( this.productListItems);
  }

  ngOnInit(): void {
  }
  handleRangeSlider = (opts) => {
    this.productListItems = this.cartService.getProductList();
    this.productListItems = this.productListItems.filter(item => (item.price < opts[1] && item.price > opts[0]));
  }
  handelAddToCart = (product) => {
    this.cartService.addItemsToCart(product);
  }
  sortHtoL = () => {
    this.productListItems.sort( (a, b) => {
      return b.price - a.price;
    });
  }

  sortDicount = () => {
    this.productListItems.sort( (a, b) => {
      return b.discount - a.discount;
    });
  }

  sortLtoH = () => {
    this.productListItems.sort( (a, b) => {
      return a.price - b.price;
    });
  }


}
