import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms'; 
import { ProductService } from '../service/product.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  isSubmitted=false;
  url:string | ArrayBuffer
  Category:any=['Chair',  'Bed', 'Sofa']

  constructor(private fb: FormBuilder, private ps:ProductService, private http: HttpClient) { }

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
    const file=event.target.files[0];
    var reader = new FileReader();

  
    reader.readAsDataURL(file); // read file as data url
    console.log(file.name);
  
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url = event.target.result;
      this.productForm.get('product_image_mine').setValue(file);
      
    }
     
  
 
  
   
    
    //console.log(this.productForm.get('product_image_mine').value);
  }

  
  
}
Upload(){
  const  formData=new FormData();

formData.append('Image',this.productForm.get('product_image_mine').value);
 
  this.http.post<any>('http://localhost:8080/upload',formData).subscribe((res)=>console.log(res),(err)=>console.log(err));
}
}


