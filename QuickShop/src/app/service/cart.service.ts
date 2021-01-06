import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  uri='http://localhost:8080';
  constructor(private http: HttpClient) { }
  getShoppingCartItems(){
    return this.http.get(`${this.uri}/shoppingcart`);
  }
  DeleteCart(){
    return this.http.delete(`${this.uri}/clearcart`);
  }
  
  AddToCart(item_name,item_price,item_quantity,user_id){
    const obj={
        item_name,
        item_price,
        item_quantity,
        user_id

    };
    console.log(obj);
    this.http.post(`${this.uri}/addtoCart`,(obj))
  .subscribe(res=>console.log('Done'));


  }
}
