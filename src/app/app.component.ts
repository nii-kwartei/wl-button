
import { Component, OnInit } from '@angular/core';
import { WishlistService } from './services/wishlist.service';
import { WishlistChangedEventArgs } from './wishlist-button/wishlist-button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // title = 'wishlist-button';
  post = {
    title: "Title",
    isWishlisted: false
  }

  wishlist = {}
  

  constructor(private service: WishlistService){}

  ngOnInit(){
    
  }

  onWishlistChanged(eventArgs: WishlistChangedEventArgs) {
    console.log("Wishlist Changed: ",  eventArgs);
    this.service.postWishlist(eventArgs);
  }

  // window.addEventlistener()

  // sendStartupEvents(){
  //   let initEvent = { type: 'initialized', data: null};
  //   this.sendEvent(initEvent);

  //   let sizeEvent = { type: 'sizeChange', data: { height: 50}};
  //   this.sendEvent(sizeEvent);
  // }

  // sendEvent(event:any, origin="*"){
  //   window.parent.postMessage(event, origin)
  // }
  
}
