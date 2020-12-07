import { Component, OnInit } from '@angular/core';
import {Product} from '../models/Product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[]
  constructor(private ps:ProductService) { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe((data:Product[])=>{this.products=data});
  }

}
