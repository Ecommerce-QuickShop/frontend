import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri='http://localhost:8080';
  constructor(private http: HttpClient) { }
  addProduct(product_name,product_description,product_category,product_units_in_stock,product_price,product_image_mine){
    const obj={
     
      product_name,
      product_description,
      product_category,
      product_units_in_stock,
      product_price,
      product_image_mine,
    };
  
    console.log(obj);

    this.http.post(`${this.uri}/admin/ProductInventory/AddProduct`,(obj))
    .subscribe(res=>console.log('Done'));
}
}