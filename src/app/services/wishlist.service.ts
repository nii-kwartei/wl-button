import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private url = 'https://jsonplaceholder.typicode.com/users';


  constructor(private http: HttpClient) { }

  postWishlist(wishlist: any){
    return this.http.post(this.url, JSON.stringify(wishlist))
            .subscribe(
              response => {
                console.log(response);
            },
              (error: Response) => {
                if(error.status === 400){
                    console.log(error);
                }
                else{
                  console.log(error);  
                }
            });
  }
}
