import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';  
import { ActivatedRoute, Router } from '@angular/router';  
import { ProductService } from '../service/product.service'; 

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  isSubmitted=false;
  product: any = {};  
  Category: any=['Chair','Bed','Sofa']
  constructor(private route: ActivatedRoute, private router: Router, private ps: ProductService, private fb: FormBuilder) { }

  editproductForm=this.fb.group({

    product_name:['',Validators.required],
    product_description:['',Validators.required],
    product_category:['',Validators.required],
    product_units_in_stock:['',Validators.required],
    product_price:['',Validators.required],
    product_image_mine:['',Validators.required]
   });
   
   UpdateProduct(id,product_name,product_description,product_category,product_units_in_stock,product_price,product_image_mine){
    this.route.params.subscribe(params => {  
      this.ps.UpdateProduct(params.id,product_name,product_description,product_category,product_units_in_stock,product_price,product_image_mine)
       
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
  
}
