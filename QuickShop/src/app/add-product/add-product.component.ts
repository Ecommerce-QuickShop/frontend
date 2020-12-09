import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms'; 
import { ProductService } from '../service/product.service';




@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  isSubmitted=false;
  url:string | ArrayBuffer
  Category:any=['Chair',  'Bed', 'Sofa']

  constructor(private fb: FormBuilder, private ps:ProductService) { }

 productForm=this.fb.group({

  product_name:['',Validators.required],
  product_description:['',Validators.required],
  product_category:['',Validators.required],
  product_units_in_stock:['',Validators.required],
  product_price:['',Validators.required],
  product_image_mine:['',Validators.required]
 });

 addProduct(product_name,product_description,product_category,product_units_in_stock,product_price,product_image_mine){
   this.ps.addProduct(product_name,product_description,product_category,product_units_in_stock,product_price,product_image_mine);
 }

 ChangeCategory(e){
   
  this.productForm.get('product_category').setValue(e.target.value,{onlySelf:true})

    
}

get ProductCategory(){
  return this.productForm.get('product_category').value;
}

 onSubmit(){
  this.isSubmitted=true;
    alert('Product Added');
  

}
onSelectFile(event) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url
    console.log(this.productForm.get('product_image_mine').value);

    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url = event.target.result;
      
    }
     
  }
  
}

}
