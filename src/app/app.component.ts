
import { Component } from '@angular/core';
import { WishlistService } from './services/wishlist.service';
import { WishlistChangedEventArgs } from './wishlist-button/wishlist-button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'wishlist-button';
  post = {
    title: "Title",
    isWishlisted: false
  }

  wishlist = {}

  constructor(private service: WishlistService){}

  onWishlistChanged(eventArgs: WishlistChangedEventArgs) {
    console.log("Wishlist Changed: ",  eventArgs);
    this.service.postWishlist(eventArgs);
  }
}
