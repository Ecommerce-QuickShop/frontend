import { Component, OnInit } from '@angular/core';
import {Product} from '../models/Product';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {

  products:Product[]
  constructor(private ps:ProductService) { }

  ngOnInit(): void {
    

    this.ps.getProducts().subscribe((data:Product[])=>{this.products=data});
  }
  deleteProduct(id){
    this.ps.deleteProduct(id).subscribe(res=>{this.products.splice(id,1)});
  }
 
}
