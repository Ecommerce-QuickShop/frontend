import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { ActivatedRoute, Router } from '@angular/router';  
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
product:any;
  constructor(private route: ActivatedRoute,private cs:CartService, private ps:ProductService) { }
  AddToCart(item_name,item_price,item_quantity,user_id){
    this.cs.AddToCart(item_name,item_price,item_quantity,user_id)
  }
  ngOnInit(): void {
this.route.params.subscribe(params => {
      this.ps.GetProductById(params['id']).subscribe( product => {
        this.product = product;
        console.log(product);
       });
   });
   

  }

}
