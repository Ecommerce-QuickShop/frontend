import { Component, OnInit } from '@angular/core';
import {Cart} from '../models/Cart';
import {CartService} from '../service/cart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
cartitems:Cart[];
  constructor(private cs:CartService) { }

  ngOnInit(): void {
    this.cs.getShoppingCartItems().subscribe((data:Cart[])=>{this.cartitems=data});
  }
  DeleteCart(){
    this.cs.DeleteCart().subscribe((data:Cart[])=>{this.cartitems=data});
  }
  deleteItem(id){
    this.cs.deleteItem(id).subscribe(res=>{this.cartitems.splice(id,1)});
  }

}
