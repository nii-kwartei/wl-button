import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-wishlist-button',
  templateUrl: './wishlist-button.component.html',
  styleUrls: ['./wishlist-button.component.css']
})

export class WishlistButtonComponent {
  @Input() isWishlisted: boolean;
  wishlistLabel = "Add To Wishlist";
  @Output() change = new EventEmitter();

  constructor(){}

  // You shouldn't be able to click it again because it has to be removed from the our test-svc frontend
  onClick() {
    console.log("Got Here");
    this.wishlistLabel = (this.isWishlisted) ? 'Add To Wishlist' : 'Added To Wishlist';
    this.isWishlisted = !this.isWishlisted;
    this.change.emit({ newValue: this.isWishlisted});
  }
}

export interface WishlistChangedEventArgs {
  newValue: boolean
}