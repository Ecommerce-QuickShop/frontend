import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms'; 
import { ProductService } from '../service/product.service';
import { HttpClient } from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';




@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  isSubmitted=false;
  url:string | ArrayBuffer
  Category: any=['Chair', 'Sofa', 'Bed'];
 
  constructor(private fb: FormBuilder, private ps:ProductService, private http: HttpClient, private domsanitizer: DomSanitizer ) { }

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
   
  this.productForm.get('product_category').setValue(e.target.value,{onlySelf:true});
  
  console.log(this.productForm.get('product_category').value);


    
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
    var imagefile = file.type;

    var match = ["image/jpeg", "image/png", "image/jpg", "image/gif"];
        if (!((imagefile == match[0]) || (imagefile == match[1]) || (imagefile == match[2]) || (imagefile==match[3]))) {
            alert("Invalid File Extension");
        }
 else{
    var reader = new FileReader();
    var filename=event.target.files[0].name;
    console.log(filename);
    
  
    reader.readAsDataURL(file); // read file as data url
    console.log(file);
  
    reader.onload = () => { // called once readAsDataURL is completed
    
    this.url = reader.result;
    //console.log(this.url);
    let Trusted =this.domsanitizer.bypassSecurityTrustResourceUrl(this.productForm.get('product_image_mine').value);
    console.log(Trusted);
    
      this.productForm.get('product_image_mine').setValue(file);

   
      
    }
     
  
 
  
   
    
   
  }
  }

  
  
}
Upload(){
  const  formData=new FormData();

formData.append('Image',this.productForm.get('product_image_mine').value);
 
  this.http.post<any>('http://localhost:8080/upload',formData).subscribe((res)=>console.log(res),(err)=>console.log(err));
}
}


