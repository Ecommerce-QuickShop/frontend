import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';  
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
product:any;
  constructor(private route: ActivatedRoute,private ps:ProductService) { }

  ngOnInit(): void {
this.route.params.subscribe(params => {
      this.ps.editProduct(params['id']).subscribe( product => {
        this.product = product;
        console.log(product);
       });
   });
   

  }

}
