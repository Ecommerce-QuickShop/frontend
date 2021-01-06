import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';  
import { ActivatedRoute, Router } from '@angular/router';  
import { Product } from '../models/Product';
import { ProductService } from '../service/product.service'; 

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  isSubmitted=false;
  product: any = {};
  productDetails:any;
 

  Category: any=['Chair','Bed','Sofa']
  url:string | ArrayBuffer
  constructor(private route: ActivatedRoute, private router: Router, private ps: ProductService, private fb: FormBuilder) { }

  editproductForm=this.fb.group({

    product_name:['',Validators.required],
    product_description:['',Validators.required],
    product_category:['',Validators.required],
    product_units_in_stock:['',Validators.required],
    product_price:['',Validators.required],
    product_image_mine:['',Validators.required]
   });
   
   UpdateProduct(product_name,product_description,product_category,product_units_in_stock,product_price,product_image_mine,id){
    this.route.params.subscribe(params => {  
      this.ps.UpdateProduct(product_name,product_description,product_category,product_units_in_stock,product_price,product_image_mine,params.id)
       
    });  
   }
  
  ChangeCategory(e){
   
    this.editproductForm.get('product_category').setValue(e.target.value,{onlySelf:true})
  
      
  }
  
  get ProductCategory(){
    return this.editproductForm.get('product_category').value;
  }
  
  onSubmit(){
    this.isSubmitted=true;

    this.route.params.subscribe(params => {  
      this.ps.editProduct(params['id']).subscribe(res => {  
        this.product = res;  
    });  
  }); 
      alert('Product Updated');
    
  
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      console.log(this.editproductForm.get('product_image_mine').value);
  
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        
      }
       
    }
    
  }
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.ps.GetProductById(params['id']).subscribe( product => {
        console.log(product);
        this.productDetails = product;
       });
   });
   
  
}
}
